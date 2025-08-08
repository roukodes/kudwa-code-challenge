import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { z } from 'zod';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';

const prisma = new PrismaClient();
const router = Router();

const ReportParams = z.object({ reportId: z.coerce.number().int().positive() });

/** GET /api/reports — list headers */
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const data = await prisma.reportHeader.findMany({
      orderBy: [{ startPeriod: 'desc' }],
      select: { id: true, reportName: true, startPeriod: true, endPeriod: true, currency: true },
    });
    return success(res, data);
  }),
);

/** GET /api/reports/:reportId — hierarchical accounts + values */
router.get(
  '/:reportId',
  validate(ReportParams, 'params'),
  asyncHandler(async (req, res) => {
    const { reportId } = (req as any)._params as z.infer<typeof ReportParams>;

    // Pull ALL accounts & values in one go, then build the tree in memory
    const accounts = await prisma.reportAccount.findMany({
      where: { reportId },
      include: {
        values: { include: { period: { select: { id: true, label: true } } } },
      },
      orderBy: { id: 'asc' },
    });

    if (accounts.length === 0) return success(res, []);

    // index by id
    const byId = new Map<number, any>();
    accounts.forEach((a) =>
      byId.set(a.id, {
        id: a.id,
        accountName: a.accountName,
        type: a.type,
        values: a.values.map((v) => ({
          periodId: v.periodId,
          label: v.period?.label,
          amount: v.amount,
        })),
        children: [] as any[],
        parentAccountId: a.parentAccountId ?? null,
      }),
    );

    // connect children
    const roots: any[] = [];
    byId.forEach((node) => {
      if (node.parentAccountId && byId.has(node.parentAccountId)) {
        byId.get(node.parentAccountId).children.push(node);
      } else {
        roots.push(node);
      }
    });

    return success(res, roots);
  }),
);

export default router;

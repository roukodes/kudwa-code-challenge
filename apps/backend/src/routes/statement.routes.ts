import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { z } from 'zod';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';

const prisma = new PrismaClient();
const router = Router();

const PeriodParams = z.object({ periodId: z.coerce.number().int().positive() });

router.get(
  '/:periodId',
  validate(PeriodParams, 'params'),
  asyncHandler(async (req, res) => {
    const { periodId } = (req as any)._params as z.infer<typeof PeriodParams>;

    const statement = await prisma.statement.findFirst({
      where: { periodId },
      include: {
        period: true,
        categories: { select: { id: true, name: true, type: true, totalValue: true } },
      },
    });

    if (!statement) return success(res, null, 404);

    // Fetch all items for all categories in one query
    const items = await prisma.statementLineItem.findMany({
      where: { categoryId: { in: statement.categories.map((c) => c.id) } },
      orderBy: { id: 'asc' },
    });

    // group by category
    const byCat = new Map<number, any[]>();
    items.forEach((it) => {
      const arr = byCat.get(it.categoryId) ?? [];
      arr.push({ ...it, children: [] as any[] });
      byCat.set(it.categoryId, arr);
    });

    // build trees per category
    const buildTree = (arr: any[]) => {
      const map = new Map<number, any>();
      const roots: any[] = [];
      arr.forEach((n) => map.set(n.id, n));
      arr.forEach((n) => {
        if (n.parentLineItemId && map.has(n.parentLineItemId)) {
          map.get(n.parentLineItemId).children.push(n);
        } else {
          roots.push(n);
        }
      });
      return roots;
    };

    const categories = statement.categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      type: cat.type,
      totalValue: cat.totalValue,
      lineItems: buildTree(byCat.get(cat.id) ?? []),
    }));

    return success(res, {
      statement: {
        id: statement.id,
        period: {
          id: statement.period.id,
          label: statement.period.label,
          startDate: statement.period.startDate,
          endDate: statement.period.endDate,
        },
        grossProfit: statement.grossProfit,
        operatingProfit: statement.operatingProfit,
        netProfit: statement.netProfit,
      },
      categories,
    });
  }),
);

export default router;

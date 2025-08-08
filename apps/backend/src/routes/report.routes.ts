import { Router } from 'express';
import { z } from 'zod';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import { getReportHierarchy, listReports } from '@/services/report.service';

const router = Router();
const ReportParams = z.object({ reportId: z.coerce.number().int().positive() });

router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const data = await listReports();
    return success(res, data);
  }),
);

router.get(
  '/:reportId',
  validate(ReportParams, 'params'),
  asyncHandler(async (req, res) => {
    const { reportId } = (req as any)._params as z.infer<typeof ReportParams>;
    const data = await getReportHierarchy(reportId);
    return success(res, data);
  }),
);

export default router;

import { Router } from 'express';
import { z } from 'zod';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import { getReportHierarchy, listReports } from '@/services/report.service';

const router = Router();
const ReportParams = z.object({ reportId: z.coerce.number().int().positive() });

/**
 * @openapi
 * /reports:
 *   get:
 *     tags: [Reports]
 *     summary: List report headers
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items: { $ref: '#/components/schemas/ReportHeader' }
 */
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const data = await listReports();
    return success(res, data);
  }),
);

/**
 * @openapi
 * /reports/{reportId}:
 *   get:
 *     tags: [Reports]
 *     summary: Get hierarchical report accounts + values
 *     parameters:
 *       - in: path
 *         name: reportId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items: { $ref: '#/components/schemas/ReportNode' }
 *       404: { description: Not found }
 */
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

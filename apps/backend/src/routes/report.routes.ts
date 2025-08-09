import { Router } from 'express';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import { getReportDetails, listReports } from '@/services/report.service';
import { ReportByIdParams } from '@/validators/report.validator';

const router = Router();

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
 */
router.get(
  '/:reportId',
  validate(ReportByIdParams, 'params'),
  asyncHandler(async (req, res) => {
    const params = ReportByIdParams.parse(req._params);
    const data = await getReportDetails(params.reportId);
    return success(res, data);
  }),
);

export default router;

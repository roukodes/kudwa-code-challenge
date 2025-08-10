import { ReportByIdParams } from '@kudwa-code-challenge/validators';
import { Router } from 'express';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import { getReportDetailsService, listReportsService } from '@/services/report.service';

const reportRouter = Router();

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
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           name:
 *                             type: string
 *                           basis:
 *                             type: string
 *                           endPeriod:
 *                             type: string
 *                             format: date-time
 *                           startPeriod:
 *                             type: string
 *                             format: date-time
 *                           currency:
 *                             type: string
 *                             nullable: true
 */
reportRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const data = await listReportsService();
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
 *                       type: object
 *                       properties:
 *                         columns:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               key:
 *                                 type: string
 *                               label:
 *                                 type: string
 *                         nodes:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               accountId:
 *                                 type: integer
 *                               name:
 *                                 type: string
 *                               type:
 *                                 type: string
 *                                 enum: [INCOME, EXPENSE, COGS, OTHER]
 *                                 nullable: true
 *                               parentAccountId:
 *                                 type: integer
 *                                 nullable: true
 *                               hasChildren:
 *                                 type: boolean
 *                               values:
 *                                 type: object
 *                                 additionalProperties:
 *                                   type: number
 *                                   nullable: true
 *                               children:
 *                                 type: array
 *                                 items:
 *                                   $ref: '#/components/schemas/AccountNodeDTO'
 *                       items: { $ref: '#/components/schemas/ReportNode' }
 */
reportRouter.get(
  '/:reportId',
  validate(ReportByIdParams, 'params'),
  asyncHandler(async (req, res) => {
    const params = ReportByIdParams.parse(req._params);
    const data = await getReportDetailsService(params.reportId);
    return success(res, data);
  }),
);

export default reportRouter;

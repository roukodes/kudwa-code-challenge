import { Router } from 'express';

import { asyncHandler, success } from '@/middleware/response';
import { runETLService } from '@/services/etl.service';

const etlRouter = Router();

/** @preserve
 * @openapi
 * /etl/run:
 *   post:
 *     tags: [ETL]
 *     summary: Trigger ETL to load JSON sources into DB
 *     responses:
 *       200:
 *         description: ETL executed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
etlRouter.post(
  '/run',
  asyncHandler(async (_req, res) => {
    const result = await runETLService();
    return success(res, result);
  }),
);

export default etlRouter;

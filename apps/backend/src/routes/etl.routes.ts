import { Router } from 'express';

import { runETL } from '@/etl';
import { asyncHandler, success } from '@/middleware/response';

const router = Router();

/**
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
router.post(
  '/run',
  asyncHandler(async (_req, res) => {
    const result = await runETL();
    return success(res, result);
  }),
);

export default router;

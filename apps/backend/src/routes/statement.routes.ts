import { Router } from 'express';
import { z } from 'zod';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import { getStatementByPeriod } from '@/services/statement.service';

const router = Router();
const PeriodParams = z.object({ periodId: z.coerce.number().int().positive() });

/**
 * @openapi
 * /statements/{periodId}:
 *   get:
 *     tags: [Statements]
 *     summary: Get statement (totals + categories + nested items) for a period
 *     parameters:
 *       - in: path
 *         name: periodId
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
 *                     data: { $ref: '#/components/schemas/StatementResponse' }
 *       404: { description: Not found }
 */

router.get(
  '/:periodId',
  validate(PeriodParams, 'params'),
  asyncHandler(async (req, res) => {
    const { periodId } = (req as any)._params as z.infer<typeof PeriodParams>;
    const data = await getStatementByPeriod(periodId);
    if (!data) return res.status(404).json({ success: false, message: 'Statement not found' });
    return success(res, data);
  }),
);

export default router;

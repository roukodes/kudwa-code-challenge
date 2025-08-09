import { Router } from 'express';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import { getStatementByPeriod, listStatements } from '@/services/statement.service';
import { ListQuery, PeriodParams } from '@/validators/statement.validator';

const router = Router();

/**
 * @openapi
 * /statements:
 *   get:
 *     tags: [Statements]
 *     summary: List statements (paginated). Set `full=true` to include categories + nested line items.
 *     parameters:
 *       - in: query
 *         name: full
 *         schema: { type: boolean }
 *         description: Include categories and nested line items.
 *       - in: query
 *         name: limit
 *         schema: { type: integer, minimum: 1, maximum: 100 }
 *         description: Page size (default 25).
 *       - in: query
 *         name: cursor
 *         schema: { type: integer }
 *         description: Use the last `id` from the previous page to fetch the next page.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             examples:
 *               headersOnly:
 *                 value:
 *                   success: true
 *                   data:
 *                     items:
 *                       - id: 5
 *                         period: { id: 3, label: "Aug 2022", startDate: "2022-08-01T00:00:00.000Z", endDate: "2022-08-31T00:00:00.000Z" }
 *                         grossProfit: 3099576.73
 *                         operatingProfit: 456375.52
 *                         netProfit: 310767.35
 *                     nextCursor: 5
 *               full:
 *                 value:
 *                   success: true
 *                   data:
 *                     items:
 *                       - statement:
 *                           id: 5
 *                           period: { id: 3, label: "Aug 2022", startDate: "2022-08-01T00:00:00.000Z", endDate: "2022-08-31T00:00:00.000Z" }
 *                           grossProfit: 3099576.73
 *                         categories:
 *                           - id: 100
 *                             name: "Business Expenses"
 *                             type: "OPERATING_EXPENSE"
 *                             totalValue: 2643201.21
 *                             lineItems: []
 *                     nextCursor: null
 */
router.get(
  '/',
  validate(ListQuery, 'query'),
  asyncHandler(async (req, res) => {
    const queryOptions = ListQuery.parse(req._query);
    const data = await listStatements(queryOptions);
    return success(res, data);
  }),
);

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
    const params = PeriodParams.parse(req._params);
    const data = await getStatementByPeriod(params.periodId);
    if (!data) return res.status(404).json({ success: false, message: 'Statement not found' });
    return success(res, data);
  }),
);

export default router;

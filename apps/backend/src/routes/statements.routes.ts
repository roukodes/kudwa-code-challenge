import {
  GetBreakdownResponseSchema,
  type GetPeriodsResponseDTO,
  GetPeriodsResponseSchema,
  type GetStatementsSummaryResponseDTO,
  GetStatementsSummaryResponseSchema,
  GetTopCategoriesResponseSchema,
  GetTrendsResponseSchema,
} from '@kudwa-code-challenge/types';
import {
  BreakdownQuery,
  GetTrendsQuery,
  PeriodsQuery,
  StatementsListQuery,
  StatementsSummaryQuery,
  TopCategoriesQuery,
} from '@kudwa-code-challenge/validators';
import { Router } from 'express';

import { asyncHandler, success } from '@/middleware/response';
import { validate } from '@/middleware/validate';
import {
  getBreakdownService,
  getPeriodsService,
  getStatementsSummaryService,
  getTopCategoriesService,
  getTrendsService,
  listStatementsService,
} from '@/services/statements.service';

const statementsRouter = Router();

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
 *                       - statement:
 *                           id: 5
 *                           period: { id: 3, label: "Aug 2022", startDate: "2022-08-01", endDate: "2022-08-31" }
 *                           grossProfit: 3099576.73
 *                           operatingProfit: 456375.52
 *                           netProfit: 310767.35
 *                     nextCursor: 5
 *               full:
 *                 value:
 *                   success: true
 *                   data:
 *                     items:
 *                       - statement:
 *                           id: 5
 *                           period: { id: 3, label: "Aug 2022", startDate: "2022-08-01", endDate: "2022-08-31" }
 *                           grossProfit: 3099576.73
 *                         categories:
 *                           - id: 100
 *                             name: "Business Expenses"
 *                             type: "OPERATING_EXPENSE"
 *                             totalValue: 2643201.21
 *                             lineItems: []
 *                     nextCursor: null
 */
statementsRouter.get(
  '/',
  validate(StatementsListQuery, 'query'),
  asyncHandler(async (req, res) => {
    const queryOptions = StatementsListQuery.parse((req as any)._query);
    const data = await listStatementsService(queryOptions);
    return success(res, data);
  }),
);

/**
 * @openapi
 * /statements/periods:
 *   get:
 *     tags: [Statements]
 *     summary: List available periods that have statements
 *     parameters:
 *       - in: query
 *         name: from
 *         required: false
 *         schema: { type: string, format: date }
 *         description: Start date (inclusive) in YYYY-MM-DD
 *       - in: query
 *         name: to
 *         required: false
 *         schema: { type: string, format: date }
 *         description: End date (inclusive) in YYYY-MM-DD
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
 *                         $ref: '#/components/schemas/Period'
 */
statementsRouter.get(
  '/periods',
  validate(PeriodsQuery, 'query'),
  asyncHandler(async (req, res) => {
    const q = PeriodsQuery.parse((req as any)._query);
    const periods = await getPeriodsService(q);

    const payload: GetPeriodsResponseDTO = { periods };
    const check = GetPeriodsResponseSchema.safeParse(payload);
    if (!check.success) {
      return res.status(500).json({ error: check.error.flatten() });
    }

    return success(res, payload);
  }),
);

/**
 * @openapi
 * /statements/summary:
 *   get:
 *     tags: [Statements]
 *     summary: Summary KPIs per period (revenue, COGS, OPEX, profits, margins)
 *     parameters:
 *       - in: query
 *         name: from
 *         required: false
 *         schema: { type: string, format: date }
 *         description: Start date (inclusive) YYYY-MM-DD
 *       - in: query
 *         name: to
 *         required: false
 *         schema: { type: string, format: date }
 *         description: End date (inclusive) YYYY-MM-DD
 *       - in: query
 *         name: limit
 *         required: false
 *         schema: { type: integer, minimum: 1, maximum: 100 }
 *         description: Page size (default 25)
 *       - in: query
 *         name: cursor
 *         required: false
 *         schema: { type: integer }
 *         description: Use the last `id` from the previous page to fetch the next page
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
 *                       $ref: '#/components/schemas/GetStatementsSummaryResponse'
 */
statementsRouter.get(
  '/summary',
  validate(StatementsSummaryQuery, 'query'),
  asyncHandler(async (req, res) => {
    const q = StatementsSummaryQuery.parse((req as any)._query);
    const payload: GetStatementsSummaryResponseDTO = await getStatementsSummaryService(q);

    const check = GetStatementsSummaryResponseSchema.safeParse(payload);
    if (!check.success) {
      return res.status(500).json({ error: check.error.flatten() });
    }

    return success(res, payload);
  }),
);

/**
 * @openapi
 * /statements/top-categories:
 *   get:
 *     tags: [Statements]
 *     summary: Get top categories by total value
 *     parameters:
 *       - in: query
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [REVENUE, COGS, OPERATING_REVENUE, NON_OPERATING_REVENUE, OPERATING_EXPENSE, NON_OPERATING_EXPENSE]
 *         description: Category type to filter by
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 50
 *         description: "Max number of categories to return (default: 5)"
 *       - in: query
 *         name: from
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date (inclusive)
 *       - in: query
 *         name: to
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: End date (inclusive)
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetTopCategoriesResponse'
 */
statementsRouter.get(
  '/top-categories',
  validate(TopCategoriesQuery, 'query'),
  asyncHandler(async (req, res) => {
    const q = TopCategoriesQuery.parse((req as any)._query);
    const payload = await getTopCategoriesService(q);

    const check = GetTopCategoriesResponseSchema.safeParse(payload);
    if (!check.success) {
      return res.status(500).json({ error: check.error.flatten() });
    }

    return success(res, payload);
  }),
);

/**
 * @openapi
 * /statements/trends:
 *   get:
 *     tags: [Statements]
 *     summary: Time series for a metric (revenue/COGS/OPEX/profits)
 *     parameters:
 *       - in: query
 *         name: companyId
 *         required: true
 *         schema: { type: integer }
 *       - in: query
 *         name: metric
 *         required: true
 *         schema:
 *           type: string
 *           enum: [revenue, cogs, opex, grossProfit, operatingProfit, netProfit]
 *       - in: query
 *         name: from
 *         schema: { type: string, format: date }
 *       - in: query
 *         name: to
 *         schema: { type: string, format: date }
 *     responses:
 *       200:
 *         description: OK
 */
statementsRouter.get(
  '/trends',
  validate(GetTrendsQuery, 'query'),
  asyncHandler(async (req, res) => {
    const q = GetTrendsQuery.parse((req as any)._query);
    const payload = await getTrendsService(q);

    const check = GetTrendsResponseSchema.safeParse(payload);
    if (!check.success) {
      return res.status(500).json({ error: check.error.flatten() });
    }
    return success(res, payload);
  }),
);

/**
 * @openapi
 * /statements/breakdown:
 *   get:
 *     tags: [Statements]
 *     summary: Get breakdown of categories for a given type
 *     parameters:
 *       - in: query
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [REVENUE, COGS, OPERATING_REVENUE, NON_OPERATING_REVENUE, OPERATING_EXPENSE, NON_OPERATING_EXPENSE]
 *         description: Category type to breakdown
 *       - in: query
 *         name: from
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date (inclusive)
 *       - in: query
 *         name: to
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *         description: End date (inclusive)
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetBreakdownResponse'
 */
statementsRouter.get(
  '/breakdown',
  validate(BreakdownQuery, 'query'),
  asyncHandler(async (req, res) => {
    const q = BreakdownQuery.parse((req as any)._query);
    const payload = await getBreakdownService(q);

    const check = GetBreakdownResponseSchema.safeParse(payload);
    if (!check.success) {
      return res.status(500).json({ error: check.error.flatten() });
    }

    return success(res, payload);
  }),
);

export default statementsRouter;

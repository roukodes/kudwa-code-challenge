import { StatementCategoryTypeSchema } from '@kudwa-code-challenge/types';
import z from 'zod';

/** Shared: coerced date range (YYYY-MM-DD → Date) with from<=to guard */
const CoercedDateRange = z
  .object({
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
  })
  .refine(({ from, to }) => !(from && to) || from <= to, { message: '"from" must be <= "to"' });

/* ================= LIST (PAGINATION) ================= */

/** GET /statements?full=&limit=&cursor= */
export const StatementsListQuery = z.object({
  full: z.coerce.boolean().default(false),
  limit: z.coerce.number().int().min(1).max(100).default(25),
  cursor: z.coerce.number().int().positive().optional(),
});
export type StatementsListQueryType = z.infer<typeof StatementsListQuery>;

/* ================= PERIODS ================= */

/** GET /statements/periods?from=&to= */
export const PeriodsQuery = CoercedDateRange;
export type PeriodsQueryType = z.infer<typeof PeriodsQuery>;

/* ================= SUMMARY ================= */

/** GET /statements/summary?from=&to=&limit=&cursor= */
export const StatementsSummaryQuery = CoercedDateRange.and(
  z.object({
    limit: z.coerce.number().int().min(1).max(100).default(25).optional(),
    cursor: z.coerce.number().int().positive().optional().optional(),
  }),
);
export type StatementsSummaryQueryType = z.infer<typeof StatementsSummaryQuery>;

/* ================= TRENDS ================= */

/** GET /statements/trends?metric=&from=&to= */
export const GetTrendsQuery = z
  .object({
    metric: z.enum(['revenue', 'cogs', 'opex', 'grossProfit', 'operatingProfit', 'netProfit']),
  })
  .and(CoercedDateRange);
export type GetTrendsQueryType = z.infer<typeof GetTrendsQuery>;

/* ================= TOP CATEGORIES ================= */

/** GET /statements/top-categories?type=&limit=&from=&to= */
export const TopCategoriesQuery = z
  .object({
    type: StatementCategoryTypeSchema,
    limit: z.coerce.number().int().min(1).max(50).default(5),
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
  })
  .refine(({ from, to }) => !(from && to) || from <= to, {
    message: '"from" must be <= "to"',
  });

export type TopCategoriesQueryType = z.infer<typeof TopCategoriesQuery>;

/* ================= BREAKDOWN ================= */

/** GET /statements/breakdown?type=&from=&to= */
export const BreakdownQuery = z
  .object({
    type: StatementCategoryTypeSchema,
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
  })
  .refine(({ from, to }) => !(from && to) || from <= to, {
    message: '"from" must be <= "to"',
  });

export type BreakdownQueryType = z.infer<typeof BreakdownQuery>;

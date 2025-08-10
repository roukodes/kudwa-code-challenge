import { z } from 'zod';

/* ---------------------------------- Enums ---------------------------------- */
export const StatementCategoryTypeSchema = z.enum([
  'REVENUE',
  'COGS',
  'OPERATING_REVENUE',
  'NON_OPERATING_REVENUE',
  'OPERATING_EXPENSE',
  'NON_OPERATING_EXPENSE',
]);
export type StatementCategoryTypeDTO = z.infer<typeof StatementCategoryTypeSchema>;

/* ------------------------------- Statements DTOs ---------------------------- */
export const PeriodSchema = z.object({
  id: z.number().int().positive(),
  label: z.string().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});
export type PeriodDTO = z.infer<typeof PeriodSchema>;

export const StatementSummarySchema = z.object({
  id: z.number().int().positive(),
  period: PeriodSchema,
  grossProfit: z.number().nullable(),
  operatingProfit: z.number().nullable(),
  netProfit: z.number().nullable(),
});
export type StatementSummaryDTO = z.infer<typeof StatementSummarySchema>;

export const StatementLineItemNodeSchema: z.ZodType<{
  id: number;
  categoryId: number;
  parentLineItemId: number | null;
  name: string;
  value: number | null;
  accountId: string | null;
  children: any[];
}> = z.lazy(() =>
  z.object({
    id: z.number().int().positive(),
    categoryId: z.number().int().positive(),
    parentLineItemId: z.number().int().positive().nullable(),
    name: z.string(),
    value: z.number().nullable(),
    accountId: z.string().nullable(),
    children: z.array(StatementLineItemNodeSchema),
  }),
);
export type StatementLineItemNodeDTO = z.infer<typeof StatementLineItemNodeSchema>;

export const StatementCategorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  type: StatementCategoryTypeSchema.nullable(),
  totalValue: z.number().nullable(),
  lineItems: z.array(StatementLineItemNodeSchema),
});
export type StatementCategoryDTO = z.infer<typeof StatementCategorySchema>;

export const StatementListEntrySchema = z.object({
  statement: StatementSummarySchema,
  categories: z.array(StatementCategorySchema).optional(),
});
export type StatementListEntryDTO = z.infer<typeof StatementListEntrySchema>;

export const ListStatementsResponseSchema = z.object({
  items: z.array(StatementListEntrySchema),
  nextCursor: z.number().int().positive().nullable(),
});
export type ListStatementsResponseDTO = z.infer<typeof ListStatementsResponseSchema>;

/* ---------------------------------- Periods -------------------------------- */
export const GetPeriodsResponseSchema = z.object({
  periods: z.array(PeriodSchema),
});
export type GetPeriodsResponseDTO = z.infer<typeof GetPeriodsResponseSchema>;

export const GetPeriodsQuerySchema = z.object({
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
});
export type GetPeriodsQuery = z.infer<typeof GetPeriodsQuerySchema>;

/* ---------------------------------- Summary -------------------------------- */
export const SummaryRowSchema = z.object({
  periodId: z.number().int().positive(),
  label: z.string().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  revenue: z.number(),
  cogs: z.number(),
  opex: z.number(),
  grossProfit: z.number(),
  operatingProfit: z.number(),
  netProfit: z.number(),
  grossMarginPct: z.number(),
  operatingMarginPct: z.number(),
  netMarginPct: z.number(),
});
export type SummaryRowDTO = z.infer<typeof SummaryRowSchema>;

export const GetStatementsSummaryResponseSchema = z.object({
  rows: z.array(SummaryRowSchema),
  nextCursor: z.number().int().positive().nullable(),
});
export type GetStatementsSummaryResponseDTO = z.infer<typeof GetStatementsSummaryResponseSchema>;

export const GetStatementsSummaryQuerySchema = z.object({
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
});
export type GetStatementsSummaryQuery = z.infer<typeof GetStatementsSummaryQuerySchema>;

/* ----------------------------------- Trends -------------------------------- */
export const TrendsPointSchema = z.object({
  periodId: z.number().int().positive(),
  label: z.string().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  value: z.number(),
});
export type TrendsPointDTO = z.infer<typeof TrendsPointSchema>;

export const GetTrendsResponseSchema = z.object({
  // TODO: Unify all the trends in a constant globally
  metric: z.enum(['revenue', 'cogs', 'opex', 'grossProfit', 'operatingProfit', 'netProfit']),
  points: z.array(TrendsPointSchema),
});
export type GetTrendsResponseDTO = z.infer<typeof GetTrendsResponseSchema>;

export const GetTrendsQuerySchema = z.object({
  metric: z.enum(['revenue', 'cogs', 'opex', 'grossProfit', 'operatingProfit', 'netProfit']),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
});
export type GetTrendsQuery = z.infer<typeof GetTrendsQuerySchema>;

export const TopCategorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  type: StatementCategoryTypeSchema,
  totalValue: z.number(),
});

/* ----------------------------------- Top Categories -------------------------------- */
export type TopCategoryDTO = z.infer<typeof TopCategorySchema>;

export const GetTopCategoriesResponseSchema = z.object({
  categories: z.array(TopCategorySchema),
});
export type GetTopCategoriesResponseDTO = z.infer<typeof GetTopCategoriesResponseSchema>;

/* ----------------------------------- Breakdown -------------------------------- */
export const BreakdownCategorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  value: z.number(),
});

export type BreakdownCategoryDTO = z.infer<typeof BreakdownCategorySchema>;

export const GetBreakdownResponseSchema = z.object({
  type: StatementCategoryTypeSchema,
  total: z.number(),
  categories: z.array(BreakdownCategorySchema),
});
export type GetBreakdownResponseDTO = z.infer<typeof GetBreakdownResponseSchema>;

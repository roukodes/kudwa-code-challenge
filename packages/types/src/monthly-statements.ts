import { z } from 'zod';

// ********* Line Item *********

export const LineItemSchema: z.ZodType<any> = z.object({
  name: z.string(),
  value: z.coerce.number().multipleOf(0.01),
  account_id: z.string(),
  line_items: z.array(z.lazy(() => LineItemSchema)).optional(),
});

export type LineItemType = z.infer<typeof LineItemSchema>;

// ********* Category *********

export const CategorySchema = z.object({
  name: z.string(),
  value: z.coerce.number().multipleOf(0.01),
  line_items: z.array(LineItemSchema),
});

export type CategoryType = z.infer<typeof CategorySchema>;

// ********* Monthly Statement *********

export const MonthlyStatementSchema = z.object({
  rootfi_id: z.coerce.number(),
  rootfi_created_at: z.iso.datetime(),
  rootfi_updated_at: z.iso.datetime(),
  rootfi_deleted_at: z.iso.datetime().optional().nullable(),
  rootfi_company_id: z.coerce.number(),
  platform_id: z.string().refine(
    (val) => {
      const parts = val.split('_');
      return (
        parts.length === 2 &&
        z.iso.date().safeParse(parts[0]).success &&
        z.iso.date().safeParse(parts[1]).success
      );
    },
    {
      message: 'Expected format: YYYY-MM-DD_YYYY-MM-DD with valid ISO dates',
    },
  ),
  platform_unique_id: z.string().optional().nullable(),
  currency_id: z.string().optional().nullable(),
  period_start: z.coerce.date(),
  period_end: z.coerce.date(),
  revenue: z.array(CategorySchema),
  cost_of_goods_sold: z.array(CategorySchema),
  gross_profit: z.coerce.number().multipleOf(0.01),
  operating_expenses: z.array(CategorySchema),
  operating_profit: z.coerce.number().multipleOf(0.01),
  non_operating_revenue: z.array(CategorySchema),
});

export type MonthlyStatementType = z.infer<typeof MonthlyStatementSchema>;

// ********* Monthly Statements *********

export const MonthlyStatementsSchema = z.object({
  data: z.array(MonthlyStatementSchema),
});

export type MonthlyStatementsType = z.infer<typeof MonthlyStatementsSchema>;

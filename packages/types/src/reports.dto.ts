import { z } from 'zod';

// ======== Reports List ========

export const ReportsSchema = z.object({
  id: z.number(),
  name: z.string(),
  basis: z.string(),
  endPeriod: z.iso.datetime(),
  startPeriod: z.iso.datetime(),
  currency: z.string().nullable(),
  /**
   * PS: We are disregarding the following fields
   * - summarizeBy: as we have no option to filter any other way (ex: yearly)
   * - options: as we have no option to filter any other way
   */
});

export type ReportsDTO = z.infer<typeof ReportsSchema>;

// ======== Reports Details ========

export const TableColumnSchema = z.object({
  key: z.string(),
  label: z.string(),
});

export type TableColumnDTO = z.infer<typeof TableColumnSchema>;

export type AccountNodeDTO = {
  accountId: number;
  name: string;
  type: 'INCOME' | 'EXPENSE' | 'COGS' | 'OTHER' | null;
  parentAccountId: number | null;
  hasChildren: boolean;
  values: Record<string, number | null>;
  children: AccountNodeDTO[];
};

export const AccountNodeSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    accountId: z.number(),
    name: z.string(),
    type: z.enum(['INCOME', 'EXPENSE', 'COGS', 'OTHER']).nullable().optional(),
    parentAccountId: z.number().nullable().optional(),
    hasChildren: z.boolean(),
    values: z.record(z.string(), z.number().nullable()),
    children: z.array(AccountNodeSchema),
  }),
);

export const GetReportTreeResponseSchema = z.object({
  columns: z.array(TableColumnSchema),
  nodes: z.array(AccountNodeSchema),
});

export type GetReportTreeResponse = z.infer<typeof GetReportTreeResponseSchema>;

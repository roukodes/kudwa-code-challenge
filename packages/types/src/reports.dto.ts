import { z } from 'zod';

// ======== Reports List ========

export const ReportsDTOSchema = z.object({
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

export type ReportsDTO = z.infer<typeof ReportsDTOSchema>;

// ======== Reports Details ========

export const TableColumnDTOSchema = z.object({
  key: z.string(),
  label: z.string(),
});

export type TableColumnDTO = z.infer<typeof TableColumnDTOSchema>;

export type AccountNodeDTO = {
  accountId: number;
  name: string;
  type: 'INCOME' | 'EXPENSE' | 'COGS' | 'OTHER' | null;
  parentAccountId: number | null;
  hasChildren: boolean;
  values: Record<string, number | null>;
  children: AccountNodeDTO[];
};

export const AccountNodeDTOSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    accountId: z.number(),
    name: z.string(),
    type: z.enum(['INCOME', 'EXPENSE', 'COGS', 'OTHER']).nullable().optional(),
    parentAccountId: z.number().nullable().optional(),
    hasChildren: z.boolean(),
    values: z.record(z.string(), z.number().nullable()),
    children: z.array(AccountNodeDTOSchema),
  }),
);

export const GetReportTreeResponseSchema = z.object({
  columns: z.array(TableColumnDTOSchema),
  nodes: z.array(AccountNodeDTOSchema),
});

export type GetReportTreeResponse = z.infer<typeof GetReportTreeResponseSchema>;

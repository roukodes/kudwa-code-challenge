import { z } from 'zod';

// ********* Enums *********

export const ReportNameEnum = z.enum(['ProfitAndLoss']);
export const ReportBasisEnum = z.enum(['Accrual']);
export const SummarizeByEnum = z.enum(['Month']);
export const CurrencyEnum = z.enum(['USD']);
export const ColTypeEnum = z.enum(['Account', 'Money']);
export const RowTypeEnum = z.enum(['Section', 'Data']);

// ********* Common *********

export const OptionSchema = z.object({
  Name: z.string(),
  Value: z.string(),
});

export type OptionType = z.infer<typeof OptionSchema>;

// ********* Header *********

export const HeaderSchema = z.object({
  Time: z.iso.datetime(),
  ReportName: ReportNameEnum,
  ReportBasis: ReportBasisEnum,
  StartPeriod: z.coerce.date(),
  EndPeriod: z.coerce.date(),
  SummarizeColumnsBy: SummarizeByEnum,
  Currency: CurrencyEnum,
  Option: z.array(OptionSchema),
});

export type HeaderType = z.infer<typeof HeaderSchema>;

// ********* Column *********

export const ColumnSchema = z.object({
  ColTitle: z.string(),
  ColType: ColTypeEnum,
  MetaData: z.array(OptionSchema),
});

export type ColumnType = z.infer<typeof ColumnSchema>;

// ********* Row *********

// Base Row
export const BaseRowDataSchema = z.object({
  value: z.coerce.string(),
  id: z.string().optional(),
});

export type BaseRowDataType = z.infer<typeof BaseRowDataSchema>;

// Row Summary
export const SummarySchema = z.object({
  ColData: z.array(BaseRowDataSchema),
});

export type SummaryType = z.infer<typeof SummarySchema>;

// Row
export type RowType = {
  Header?: { ColData: BaseRowDataType[] };
  Rows?: { Row: RowType[] };
  Summary?: { ColData: BaseRowDataType[] };
  ColData?: BaseRowDataType[];
  type?: z.infer<typeof RowTypeEnum>;
};

export const RowSchema: z.ZodType<RowType> = z.lazy(() =>
  z.object({
    Header: z
      .object({
        ColData: z.array(BaseRowDataSchema),
      })
      .optional(),
    Rows: z
      .object({
        Row: z.array(z.lazy(() => RowSchema)),
      })
      .optional(),
    Summary: SummarySchema.optional(),
    ColData: z.array(BaseRowDataSchema).optional(),
    type: RowTypeEnum.optional(),
  }),
);

// ********* Table Report *********

export const TableReportSchema = z.object({
  data: z.object({
    Header: HeaderSchema,
    Columns: z.object({
      Column: z.array(ColumnSchema),
    }),
    Rows: z.object({
      Row: z.array(RowSchema),
    }),
  }),
});

export type TableReportType = z.infer<typeof TableReportSchema>;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { PeriodScalarRelationFilterSchema } from './PeriodScalarRelationFilterSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';
import { StatementCategoryListRelationFilterSchema } from './StatementCategoryListRelationFilterSchema';
import { StatementCompanyIdPeriodIdCompoundUniqueInputSchema } from './StatementCompanyIdPeriodIdCompoundUniqueInputSchema';
import { StatementWhereInputSchema } from './StatementWhereInputSchema';

export const StatementWhereUniqueInputSchema: z.ZodType<Prisma.StatementWhereUniqueInput> = z
  .union([
    z.object({
      id: z.number().int(),
      companyId_periodId: z.lazy(() => StatementCompanyIdPeriodIdCompoundUniqueInputSchema),
    }),
    z.object({
      id: z.number().int(),
    }),
    z.object({
      companyId_periodId: z.lazy(() => StatementCompanyIdPeriodIdCompoundUniqueInputSchema),
    }),
  ])
  .and(
    z
      .object({
        id: z.number().int().optional(),
        companyId_periodId: z
          .lazy(() => StatementCompanyIdPeriodIdCompoundUniqueInputSchema)
          .optional(),
        AND: z
          .union([
            z.lazy(() => StatementWhereInputSchema),
            z.lazy(() => StatementWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => StatementWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => StatementWhereInputSchema),
            z.lazy(() => StatementWhereInputSchema).array(),
          ])
          .optional(),
        companyId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        periodId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        rootfiId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
        grossProfit: z
          .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
          .optional()
          .nullable(),
        operatingProfit: z
          .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
          .optional()
          .nullable(),
        netProfit: z
          .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
          .optional()
          .nullable(),
        earningsBeforeTaxes: z
          .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
          .optional()
          .nullable(),
        taxes: z
          .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
          .optional()
          .nullable(),
        customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
        createdAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
        updatedAt: z
          .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
          .optional()
          .nullable(),
        company: z
          .union([
            z.lazy(() => CompanyScalarRelationFilterSchema),
            z.lazy(() => CompanyWhereInputSchema),
          ])
          .optional(),
        period: z
          .union([
            z.lazy(() => PeriodScalarRelationFilterSchema),
            z.lazy(() => PeriodWhereInputSchema),
          ])
          .optional(),
        categories: z.lazy(() => StatementCategoryListRelationFilterSchema).optional(),
      })
      .strict(),
  );

export default StatementWhereUniqueInputSchema;

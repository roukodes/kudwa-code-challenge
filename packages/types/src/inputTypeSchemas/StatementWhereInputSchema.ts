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

export const StatementWhereInputSchema: z.ZodType<Prisma.StatementWhereInput> = z
  .object({
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
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    companyId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    periodId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    rootfiId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
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
      .union([z.lazy(() => PeriodScalarRelationFilterSchema), z.lazy(() => PeriodWhereInputSchema)])
      .optional(),
    categories: z.lazy(() => StatementCategoryListRelationFilterSchema).optional(),
  })
  .strict();

export default StatementWhereInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateNestedOneWithoutStatementsInputSchema } from './CompanyCreateNestedOneWithoutStatementsInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { PeriodCreateNestedOneWithoutStatementsInputSchema } from './PeriodCreateNestedOneWithoutStatementsInputSchema';

export const StatementCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.StatementCreateWithoutCategoriesInput> =
  z
    .object({
      rootfiId: z.number().int(),
      grossProfit: z.number().optional().nullable(),
      operatingProfit: z.number().optional().nullable(),
      netProfit: z.number().optional().nullable(),
      earningsBeforeTaxes: z.number().optional().nullable(),
      taxes: z.number().optional().nullable(),
      customFields: z
        .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
        .optional(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
      company: z.lazy(() => CompanyCreateNestedOneWithoutStatementsInputSchema),
      period: z.lazy(() => PeriodCreateNestedOneWithoutStatementsInputSchema),
    })
    .strict();

export default StatementCreateWithoutCategoriesInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';

export const StatementCreateManyInputSchema: z.ZodType<Prisma.StatementCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    companyId: z.number().int(),
    periodId: z.number().int(),
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
  })
  .strict();

export default StatementCreateManyInputSchema;

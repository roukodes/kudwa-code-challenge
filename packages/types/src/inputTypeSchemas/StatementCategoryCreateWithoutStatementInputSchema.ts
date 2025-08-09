import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementLineItemCreateNestedManyWithoutCategoryInputSchema } from './StatementLineItemCreateNestedManyWithoutCategoryInputSchema';

export const StatementCategoryCreateWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryCreateWithoutStatementInput> =
  z
    .object({
      type: z.lazy(() => StatementCategoryTypeSchema),
      name: z.string(),
      totalValue: z.number().optional().nullable(),
      lineItems: z
        .lazy(() => StatementLineItemCreateNestedManyWithoutCategoryInputSchema)
        .optional(),
    })
    .strict();

export default StatementCategoryCreateWithoutStatementInputSchema;

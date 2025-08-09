import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementLineItemUncheckedCreateNestedManyWithoutCategoryInputSchema } from './StatementLineItemUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const StatementCategoryUncheckedCreateWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryUncheckedCreateWithoutStatementInput> =
  z
    .object({
      id: z.number().int().optional(),
      type: z.lazy(() => StatementCategoryTypeSchema),
      name: z.string(),
      totalValue: z.number().optional().nullable(),
      lineItems: z
        .lazy(() => StatementLineItemUncheckedCreateNestedManyWithoutCategoryInputSchema)
        .optional(),
    })
    .strict();

export default StatementCategoryUncheckedCreateWithoutStatementInputSchema;

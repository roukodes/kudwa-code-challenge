import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementLineItemUncheckedCreateNestedManyWithoutCategoryInputSchema } from './StatementLineItemUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const StatementCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.StatementCategoryUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      statementId: z.number().int(),
      type: z.lazy(() => StatementCategoryTypeSchema),
      name: z.string(),
      totalValue: z.number().optional().nullable(),
      lineItems: z
        .lazy(() => StatementLineItemUncheckedCreateNestedManyWithoutCategoryInputSchema)
        .optional(),
    })
    .strict();

export default StatementCategoryUncheckedCreateInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema';

export const StatementLineItemUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedCreateWithoutCategoryInput> =
  z
    .object({
      id: z.number().int().optional(),
      parentLineItemId: z.number().int().optional().nullable(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      childLineItems: z
        .lazy(() => StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedCreateWithoutCategoryInputSchema;

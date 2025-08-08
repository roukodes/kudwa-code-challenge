import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema';

export const StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedCreateWithoutParentLineItemInput> =
  z
    .object({
      id: z.number().int().optional(),
      categoryId: z.number().int(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      childLineItems: z
        .lazy(() => StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema;

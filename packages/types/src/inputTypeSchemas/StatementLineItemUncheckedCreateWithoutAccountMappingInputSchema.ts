import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema';

export const StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedCreateWithoutAccountMappingInput> =
  z
    .object({
      id: z.number().int().optional(),
      categoryId: z.number().int(),
      parentLineItemId: z.number().int().optional().nullable(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      childLineItems: z
        .lazy(() => StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema;

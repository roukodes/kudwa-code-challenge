import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema';
import { StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema } from './StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema';

export const StatementLineItemCreateWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemCreateWithoutCategoryInput> =
  z
    .object({
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      parentLineItem: z
        .lazy(() => StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema)
        .optional(),
      childLineItems: z
        .lazy(() => StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemCreateWithoutCategoryInputSchema;

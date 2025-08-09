import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateNestedOneWithoutLineItemsInputSchema } from './StatementCategoryCreateNestedOneWithoutLineItemsInputSchema';
import { StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema } from './StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema';

export const StatementLineItemCreateWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemCreateWithoutChildLineItemsInput> =
  z
    .object({
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      category: z.lazy(() => StatementCategoryCreateNestedOneWithoutLineItemsInputSchema),
      parentLineItem: z
        .lazy(() => StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemCreateWithoutChildLineItemsInputSchema;

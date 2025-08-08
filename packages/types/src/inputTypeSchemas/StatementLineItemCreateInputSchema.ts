import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateNestedOneWithoutLineItemsInputSchema } from './StatementCategoryCreateNestedOneWithoutLineItemsInputSchema';
import { StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema';
import { StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema } from './StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema';

export const StatementLineItemCreateInputSchema: z.ZodType<Prisma.StatementLineItemCreateInput> = z
  .object({
    name: z.string(),
    value: z.number().optional().nullable(),
    accountId: z.string().optional().nullable(),
    category: z.lazy(() => StatementCategoryCreateNestedOneWithoutLineItemsInputSchema),
    parentLineItem: z
      .lazy(() => StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema)
      .optional(),
    childLineItems: z
      .lazy(() => StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema)
      .optional(),
  })
  .strict();

export default StatementLineItemCreateInputSchema;

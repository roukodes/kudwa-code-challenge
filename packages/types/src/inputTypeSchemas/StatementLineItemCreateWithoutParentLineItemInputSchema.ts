import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateNestedOneWithoutLineItemsInputSchema } from './StatementCategoryCreateNestedOneWithoutLineItemsInputSchema';
import { StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema';

export const StatementLineItemCreateWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemCreateWithoutParentLineItemInput> =
  z
    .object({
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      category: z.lazy(() => StatementCategoryCreateNestedOneWithoutLineItemsInputSchema),
      childLineItems: z
        .lazy(() => StatementLineItemCreateNestedManyWithoutParentLineItemInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemCreateWithoutParentLineItemInputSchema;

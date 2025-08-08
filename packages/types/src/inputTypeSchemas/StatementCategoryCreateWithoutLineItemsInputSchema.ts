import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementCreateNestedOneWithoutCategoriesInputSchema } from './StatementCreateNestedOneWithoutCategoriesInputSchema';

export const StatementCategoryCreateWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryCreateWithoutLineItemsInput> =
  z
    .object({
      type: z.lazy(() => StatementCategoryTypeSchema),
      name: z.string(),
      totalValue: z.number().optional().nullable(),
      statement: z.lazy(() => StatementCreateNestedOneWithoutCategoriesInputSchema),
    })
    .strict();

export default StatementCategoryCreateWithoutLineItemsInputSchema;

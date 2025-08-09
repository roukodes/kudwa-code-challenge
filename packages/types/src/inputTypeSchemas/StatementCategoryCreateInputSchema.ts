import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementCreateNestedOneWithoutCategoriesInputSchema } from './StatementCreateNestedOneWithoutCategoriesInputSchema';
import { StatementLineItemCreateNestedManyWithoutCategoryInputSchema } from './StatementLineItemCreateNestedManyWithoutCategoryInputSchema';

export const StatementCategoryCreateInputSchema: z.ZodType<Prisma.StatementCategoryCreateInput> = z
  .object({
    type: z.lazy(() => StatementCategoryTypeSchema),
    name: z.string(),
    totalValue: z.number().optional().nullable(),
    statement: z.lazy(() => StatementCreateNestedOneWithoutCategoriesInputSchema),
    lineItems: z.lazy(() => StatementLineItemCreateNestedManyWithoutCategoryInputSchema).optional(),
  })
  .strict();

export default StatementCategoryCreateInputSchema;

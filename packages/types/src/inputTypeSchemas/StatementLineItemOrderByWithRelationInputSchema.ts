import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementCategoryOrderByWithRelationInputSchema } from './StatementCategoryOrderByWithRelationInputSchema';
import { StatementLineItemOrderByRelationAggregateInputSchema } from './StatementLineItemOrderByRelationAggregateInputSchema';
import { StatementLineItemOrderByRelevanceInputSchema } from './StatementLineItemOrderByRelevanceInputSchema';

export const StatementLineItemOrderByWithRelationInputSchema: z.ZodType<Prisma.StatementLineItemOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      categoryId: z.lazy(() => SortOrderSchema).optional(),
      parentLineItemId: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      value: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      accountId: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      category: z.lazy(() => StatementCategoryOrderByWithRelationInputSchema).optional(),
      parentLineItem: z.lazy(() => StatementLineItemOrderByWithRelationInputSchema).optional(),
      childLineItems: z.lazy(() => StatementLineItemOrderByRelationAggregateInputSchema).optional(),
      _relevance: z.lazy(() => StatementLineItemOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default StatementLineItemOrderByWithRelationInputSchema;

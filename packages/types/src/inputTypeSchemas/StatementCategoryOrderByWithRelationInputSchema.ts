import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementCategoryOrderByRelevanceInputSchema } from './StatementCategoryOrderByRelevanceInputSchema';
import { StatementLineItemOrderByRelationAggregateInputSchema } from './StatementLineItemOrderByRelationAggregateInputSchema';
import { StatementOrderByWithRelationInputSchema } from './StatementOrderByWithRelationInputSchema';

export const StatementCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.StatementCategoryOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      totalValue: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      statement: z.lazy(() => StatementOrderByWithRelationInputSchema).optional(),
      lineItems: z.lazy(() => StatementLineItemOrderByRelationAggregateInputSchema).optional(),
      _relevance: z.lazy(() => StatementCategoryOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default StatementCategoryOrderByWithRelationInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementCategoryAvgOrderByAggregateInputSchema } from './StatementCategoryAvgOrderByAggregateInputSchema';
import { StatementCategoryCountOrderByAggregateInputSchema } from './StatementCategoryCountOrderByAggregateInputSchema';
import { StatementCategoryMaxOrderByAggregateInputSchema } from './StatementCategoryMaxOrderByAggregateInputSchema';
import { StatementCategoryMinOrderByAggregateInputSchema } from './StatementCategoryMinOrderByAggregateInputSchema';
import { StatementCategorySumOrderByAggregateInputSchema } from './StatementCategorySumOrderByAggregateInputSchema';

export const StatementCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.StatementCategoryOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      totalValue: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => StatementCategoryCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => StatementCategoryAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => StatementCategoryMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => StatementCategoryMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => StatementCategorySumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default StatementCategoryOrderByWithAggregationInputSchema;

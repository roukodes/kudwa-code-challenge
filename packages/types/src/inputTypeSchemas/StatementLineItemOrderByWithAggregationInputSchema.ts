import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementLineItemAvgOrderByAggregateInputSchema } from './StatementLineItemAvgOrderByAggregateInputSchema';
import { StatementLineItemCountOrderByAggregateInputSchema } from './StatementLineItemCountOrderByAggregateInputSchema';
import { StatementLineItemMaxOrderByAggregateInputSchema } from './StatementLineItemMaxOrderByAggregateInputSchema';
import { StatementLineItemMinOrderByAggregateInputSchema } from './StatementLineItemMinOrderByAggregateInputSchema';
import { StatementLineItemSumOrderByAggregateInputSchema } from './StatementLineItemSumOrderByAggregateInputSchema';

export const StatementLineItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.StatementLineItemOrderByWithAggregationInput> =
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
      _count: z.lazy(() => StatementLineItemCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => StatementLineItemAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => StatementLineItemMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => StatementLineItemMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => StatementLineItemSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default StatementLineItemOrderByWithAggregationInputSchema;

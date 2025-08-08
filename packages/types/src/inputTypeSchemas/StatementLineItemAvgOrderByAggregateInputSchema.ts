import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementLineItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StatementLineItemAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      categoryId: z.lazy(() => SortOrderSchema).optional(),
      parentLineItemId: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementLineItemAvgOrderByAggregateInputSchema;

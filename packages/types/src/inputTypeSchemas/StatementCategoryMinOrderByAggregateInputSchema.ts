import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.StatementCategoryMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      totalValue: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementCategoryMinOrderByAggregateInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StatementCategoryAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementId: z.lazy(() => SortOrderSchema).optional(),
      totalValue: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementCategoryAvgOrderByAggregateInputSchema;

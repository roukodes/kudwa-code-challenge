import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.StatementCategorySumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementId: z.lazy(() => SortOrderSchema).optional(),
      totalValue: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementCategorySumOrderByAggregateInputSchema;

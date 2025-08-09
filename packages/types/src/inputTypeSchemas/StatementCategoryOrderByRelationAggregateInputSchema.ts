import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StatementCategoryOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementCategoryOrderByRelationAggregateInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StatementOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementOrderByRelationAggregateInputSchema;

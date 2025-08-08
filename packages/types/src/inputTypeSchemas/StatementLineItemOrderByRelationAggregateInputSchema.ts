import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementLineItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StatementLineItemOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementLineItemOrderByRelationAggregateInputSchema;

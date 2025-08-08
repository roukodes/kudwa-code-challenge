import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const PeriodAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PeriodAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PeriodAvgOrderByAggregateInputSchema;

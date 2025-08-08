import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const PeriodSumOrderByAggregateInputSchema: z.ZodType<Prisma.PeriodSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PeriodSumOrderByAggregateInputSchema;

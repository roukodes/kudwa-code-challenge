import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const PeriodMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PeriodMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      startDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PeriodMaxOrderByAggregateInputSchema;

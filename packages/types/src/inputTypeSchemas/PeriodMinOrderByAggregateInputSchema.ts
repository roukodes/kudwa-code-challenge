import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const PeriodMinOrderByAggregateInputSchema: z.ZodType<Prisma.PeriodMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      startDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PeriodMinOrderByAggregateInputSchema;

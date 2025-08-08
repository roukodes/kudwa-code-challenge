import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodAvgOrderByAggregateInputSchema } from './PeriodAvgOrderByAggregateInputSchema';
import { PeriodCountOrderByAggregateInputSchema } from './PeriodCountOrderByAggregateInputSchema';
import { PeriodMaxOrderByAggregateInputSchema } from './PeriodMaxOrderByAggregateInputSchema';
import { PeriodMinOrderByAggregateInputSchema } from './PeriodMinOrderByAggregateInputSchema';
import { PeriodSumOrderByAggregateInputSchema } from './PeriodSumOrderByAggregateInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PeriodOrderByWithAggregationInputSchema: z.ZodType<Prisma.PeriodOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      startDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => PeriodCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => PeriodAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PeriodMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PeriodMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => PeriodSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default PeriodOrderByWithAggregationInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueAvgOrderByAggregateInputSchema } from './ReportAccountValueAvgOrderByAggregateInputSchema';
import { ReportAccountValueCountOrderByAggregateInputSchema } from './ReportAccountValueCountOrderByAggregateInputSchema';
import { ReportAccountValueMaxOrderByAggregateInputSchema } from './ReportAccountValueMaxOrderByAggregateInputSchema';
import { ReportAccountValueMinOrderByAggregateInputSchema } from './ReportAccountValueMinOrderByAggregateInputSchema';
import { ReportAccountValueSumOrderByAggregateInputSchema } from './ReportAccountValueSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountValueOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportAccountValueOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      periodId: z.lazy(() => SortOrderSchema).optional(),
      amount: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => ReportAccountValueCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => ReportAccountValueAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ReportAccountValueMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ReportAccountValueMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => ReportAccountValueSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default ReportAccountValueOrderByWithAggregationInputSchema;

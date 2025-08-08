import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountAvgOrderByAggregateInputSchema } from './ReportAccountAvgOrderByAggregateInputSchema';
import { ReportAccountCountOrderByAggregateInputSchema } from './ReportAccountCountOrderByAggregateInputSchema';
import { ReportAccountMaxOrderByAggregateInputSchema } from './ReportAccountMaxOrderByAggregateInputSchema';
import { ReportAccountMinOrderByAggregateInputSchema } from './ReportAccountMinOrderByAggregateInputSchema';
import { ReportAccountSumOrderByAggregateInputSchema } from './ReportAccountSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportAccountOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      reportId: z.lazy(() => SortOrderSchema).optional(),
      accountName: z.lazy(() => SortOrderSchema).optional(),
      parentAccountId: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      _count: z.lazy(() => ReportAccountCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => ReportAccountAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ReportAccountMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ReportAccountMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => ReportAccountSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default ReportAccountOrderByWithAggregationInputSchema;

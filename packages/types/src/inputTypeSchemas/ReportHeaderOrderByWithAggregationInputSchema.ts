import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderAvgOrderByAggregateInputSchema } from './ReportHeaderAvgOrderByAggregateInputSchema';
import { ReportHeaderCountOrderByAggregateInputSchema } from './ReportHeaderCountOrderByAggregateInputSchema';
import { ReportHeaderMaxOrderByAggregateInputSchema } from './ReportHeaderMaxOrderByAggregateInputSchema';
import { ReportHeaderMinOrderByAggregateInputSchema } from './ReportHeaderMinOrderByAggregateInputSchema';
import { ReportHeaderSumOrderByAggregateInputSchema } from './ReportHeaderSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportHeaderOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
      reportName: z.lazy(() => SortOrderSchema).optional(),
      basis: z.lazy(() => SortOrderSchema).optional(),
      startPeriod: z.lazy(() => SortOrderSchema).optional(),
      endPeriod: z.lazy(() => SortOrderSchema).optional(),
      currency: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      options: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => ReportHeaderCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => ReportHeaderAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ReportHeaderMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ReportHeaderMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => ReportHeaderSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default ReportHeaderOrderByWithAggregationInputSchema;

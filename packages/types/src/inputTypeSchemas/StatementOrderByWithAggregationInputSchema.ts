import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementAvgOrderByAggregateInputSchema } from './StatementAvgOrderByAggregateInputSchema';
import { StatementCountOrderByAggregateInputSchema } from './StatementCountOrderByAggregateInputSchema';
import { StatementMaxOrderByAggregateInputSchema } from './StatementMaxOrderByAggregateInputSchema';
import { StatementMinOrderByAggregateInputSchema } from './StatementMinOrderByAggregateInputSchema';
import { StatementSumOrderByAggregateInputSchema } from './StatementSumOrderByAggregateInputSchema';

export const StatementOrderByWithAggregationInputSchema: z.ZodType<Prisma.StatementOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
      periodId: z.lazy(() => SortOrderSchema).optional(),
      rootfiId: z.lazy(() => SortOrderSchema).optional(),
      grossProfit: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      operatingProfit: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      netProfit: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      earningsBeforeTaxes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      taxes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      customFields: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      createdAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => StatementCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => StatementAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => StatementMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => StatementMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => StatementSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default StatementOrderByWithAggregationInputSchema;

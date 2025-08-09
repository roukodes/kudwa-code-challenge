import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const StatementMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StatementMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
      periodId: z.lazy(() => SortOrderSchema).optional(),
      rootfiId: z.lazy(() => SortOrderSchema).optional(),
      grossProfit: z.lazy(() => SortOrderSchema).optional(),
      operatingProfit: z.lazy(() => SortOrderSchema).optional(),
      netProfit: z.lazy(() => SortOrderSchema).optional(),
      earningsBeforeTaxes: z.lazy(() => SortOrderSchema).optional(),
      taxes: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default StatementMaxOrderByAggregateInputSchema;

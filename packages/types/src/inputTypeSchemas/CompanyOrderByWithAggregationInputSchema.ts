import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyAvgOrderByAggregateInputSchema } from './CompanyAvgOrderByAggregateInputSchema';
import { CompanyCountOrderByAggregateInputSchema } from './CompanyCountOrderByAggregateInputSchema';
import { CompanyMaxOrderByAggregateInputSchema } from './CompanyMaxOrderByAggregateInputSchema';
import { CompanyMinOrderByAggregateInputSchema } from './CompanyMinOrderByAggregateInputSchema';
import { CompanySumOrderByAggregateInputSchema } from './CompanySumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const CompanyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      currency: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      createdAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => CompanyCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => CompanyAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => CompanyMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => CompanyMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => CompanySumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default CompanyOrderByWithAggregationInputSchema;

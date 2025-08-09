import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const CompanyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CompanyAvgOrderByAggregateInputSchema;

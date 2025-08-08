import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const CompanySumOrderByAggregateInputSchema: z.ZodType<Prisma.CompanySumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CompanySumOrderByAggregateInputSchema;

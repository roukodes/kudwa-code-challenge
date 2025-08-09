import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportAccountOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportAccountOrderByRelationAggregateInputSchema;

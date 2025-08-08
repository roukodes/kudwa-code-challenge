import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportHeaderOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportHeaderOrderByRelationAggregateInputSchema;

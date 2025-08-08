import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportHeaderAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportHeaderAvgOrderByAggregateInputSchema;

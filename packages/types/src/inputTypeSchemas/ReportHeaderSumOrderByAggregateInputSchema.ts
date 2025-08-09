import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReportHeaderSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportHeaderSumOrderByAggregateInputSchema;

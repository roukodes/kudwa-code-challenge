import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAccountAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      reportId: z.lazy(() => SortOrderSchema).optional(),
      parentAccountId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportAccountAvgOrderByAggregateInputSchema;

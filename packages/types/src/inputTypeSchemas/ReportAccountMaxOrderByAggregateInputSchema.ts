import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAccountMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      reportId: z.lazy(() => SortOrderSchema).optional(),
      accountName: z.lazy(() => SortOrderSchema).optional(),
      parentAccountId: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportAccountMaxOrderByAggregateInputSchema;

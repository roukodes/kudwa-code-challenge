import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAccountSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      reportId: z.lazy(() => SortOrderSchema).optional(),
      parentAccountId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportAccountSumOrderByAggregateInputSchema;

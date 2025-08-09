import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountValueCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAccountValueCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      periodId: z.lazy(() => SortOrderSchema).optional(),
      amount: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportAccountValueCountOrderByAggregateInputSchema;

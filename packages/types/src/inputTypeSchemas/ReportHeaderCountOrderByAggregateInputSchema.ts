import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReportHeaderCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
      reportName: z.lazy(() => SortOrderSchema).optional(),
      basis: z.lazy(() => SortOrderSchema).optional(),
      startPeriod: z.lazy(() => SortOrderSchema).optional(),
      endPeriod: z.lazy(() => SortOrderSchema).optional(),
      currency: z.lazy(() => SortOrderSchema).optional(),
      options: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReportHeaderCountOrderByAggregateInputSchema;

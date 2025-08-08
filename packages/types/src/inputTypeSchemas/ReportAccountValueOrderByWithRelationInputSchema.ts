import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodOrderByWithRelationInputSchema } from './PeriodOrderByWithRelationInputSchema';
import { ReportAccountOrderByWithRelationInputSchema } from './ReportAccountOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountValueOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportAccountValueOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      periodId: z.lazy(() => SortOrderSchema).optional(),
      amount: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      account: z.lazy(() => ReportAccountOrderByWithRelationInputSchema).optional(),
      period: z.lazy(() => PeriodOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export default ReportAccountValueOrderByWithRelationInputSchema;

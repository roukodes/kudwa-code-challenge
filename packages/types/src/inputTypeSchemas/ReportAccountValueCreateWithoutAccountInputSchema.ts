import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateNestedOneWithoutReportValuesInputSchema } from './PeriodCreateNestedOneWithoutReportValuesInputSchema';

export const ReportAccountValueCreateWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueCreateWithoutAccountInput> =
  z
    .object({
      amount: z.number().optional().nullable(),
      period: z.lazy(() => PeriodCreateNestedOneWithoutReportValuesInputSchema),
    })
    .strict();

export default ReportAccountValueCreateWithoutAccountInputSchema;

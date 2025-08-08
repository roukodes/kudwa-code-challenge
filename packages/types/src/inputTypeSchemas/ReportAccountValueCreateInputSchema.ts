import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateNestedOneWithoutReportValuesInputSchema } from './PeriodCreateNestedOneWithoutReportValuesInputSchema';
import { ReportAccountCreateNestedOneWithoutValuesInputSchema } from './ReportAccountCreateNestedOneWithoutValuesInputSchema';

export const ReportAccountValueCreateInputSchema: z.ZodType<Prisma.ReportAccountValueCreateInput> =
  z
    .object({
      amount: z.number().optional().nullable(),
      account: z.lazy(() => ReportAccountCreateNestedOneWithoutValuesInputSchema),
      period: z.lazy(() => PeriodCreateNestedOneWithoutReportValuesInputSchema),
    })
    .strict();

export default ReportAccountValueCreateInputSchema;

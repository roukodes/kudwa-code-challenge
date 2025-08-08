import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateNestedOneWithoutValuesInputSchema } from './ReportAccountCreateNestedOneWithoutValuesInputSchema';

export const ReportAccountValueCreateWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueCreateWithoutPeriodInput> =
  z
    .object({
      amount: z.number().optional().nullable(),
      account: z.lazy(() => ReportAccountCreateNestedOneWithoutValuesInputSchema),
    })
    .strict();

export default ReportAccountValueCreateWithoutPeriodInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateNestedManyWithoutPeriodInputSchema } from './ReportAccountValueCreateNestedManyWithoutPeriodInputSchema';

export const PeriodCreateWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodCreateWithoutStatementsInput> =
  z
    .object({
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      label: z.string(),
      reportValues: z
        .lazy(() => ReportAccountValueCreateNestedManyWithoutPeriodInputSchema)
        .optional(),
    })
    .strict();

export default PeriodCreateWithoutStatementsInputSchema;

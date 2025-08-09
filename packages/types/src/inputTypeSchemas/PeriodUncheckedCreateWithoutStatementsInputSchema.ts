import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueUncheckedCreateNestedManyWithoutPeriodInputSchema } from './ReportAccountValueUncheckedCreateNestedManyWithoutPeriodInputSchema';

export const PeriodUncheckedCreateWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodUncheckedCreateWithoutStatementsInput> =
  z
    .object({
      id: z.number().int().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      label: z.string(),
      reportValues: z
        .lazy(() => ReportAccountValueUncheckedCreateNestedManyWithoutPeriodInputSchema)
        .optional(),
    })
    .strict();

export default PeriodUncheckedCreateWithoutStatementsInputSchema;

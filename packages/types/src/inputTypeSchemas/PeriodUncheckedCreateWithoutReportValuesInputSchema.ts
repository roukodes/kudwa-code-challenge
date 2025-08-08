import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementUncheckedCreateNestedManyWithoutPeriodInputSchema } from './StatementUncheckedCreateNestedManyWithoutPeriodInputSchema';

export const PeriodUncheckedCreateWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodUncheckedCreateWithoutReportValuesInput> =
  z
    .object({
      id: z.number().int().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      label: z.string(),
      statements: z
        .lazy(() => StatementUncheckedCreateNestedManyWithoutPeriodInputSchema)
        .optional(),
    })
    .strict();

export default PeriodUncheckedCreateWithoutReportValuesInputSchema;

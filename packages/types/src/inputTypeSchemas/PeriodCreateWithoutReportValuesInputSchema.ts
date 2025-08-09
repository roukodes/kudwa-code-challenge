import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateNestedManyWithoutPeriodInputSchema } from './StatementCreateNestedManyWithoutPeriodInputSchema';

export const PeriodCreateWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodCreateWithoutReportValuesInput> =
  z
    .object({
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      label: z.string(),
      statements: z.lazy(() => StatementCreateNestedManyWithoutPeriodInputSchema).optional(),
    })
    .strict();

export default PeriodCreateWithoutReportValuesInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateNestedManyWithoutPeriodInputSchema } from './ReportAccountValueCreateNestedManyWithoutPeriodInputSchema';
import { StatementCreateNestedManyWithoutPeriodInputSchema } from './StatementCreateNestedManyWithoutPeriodInputSchema';

export const PeriodCreateInputSchema: z.ZodType<Prisma.PeriodCreateInput> = z
  .object({
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    label: z.string(),
    statements: z.lazy(() => StatementCreateNestedManyWithoutPeriodInputSchema).optional(),
    reportValues: z
      .lazy(() => ReportAccountValueCreateNestedManyWithoutPeriodInputSchema)
      .optional(),
  })
  .strict();

export default PeriodCreateInputSchema;

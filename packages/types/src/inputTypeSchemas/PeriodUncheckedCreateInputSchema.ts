import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueUncheckedCreateNestedManyWithoutPeriodInputSchema } from './ReportAccountValueUncheckedCreateNestedManyWithoutPeriodInputSchema';
import { StatementUncheckedCreateNestedManyWithoutPeriodInputSchema } from './StatementUncheckedCreateNestedManyWithoutPeriodInputSchema';

export const PeriodUncheckedCreateInputSchema: z.ZodType<Prisma.PeriodUncheckedCreateInput> = z
  .object({
    id: z.number().int().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    label: z.string(),
    statements: z.lazy(() => StatementUncheckedCreateNestedManyWithoutPeriodInputSchema).optional(),
    reportValues: z
      .lazy(() => ReportAccountValueUncheckedCreateNestedManyWithoutPeriodInputSchema)
      .optional(),
  })
  .strict();

export default PeriodUncheckedCreateInputSchema;

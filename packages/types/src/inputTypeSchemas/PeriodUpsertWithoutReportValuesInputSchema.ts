import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateWithoutReportValuesInputSchema } from './PeriodCreateWithoutReportValuesInputSchema';
import { PeriodUncheckedCreateWithoutReportValuesInputSchema } from './PeriodUncheckedCreateWithoutReportValuesInputSchema';
import { PeriodUncheckedUpdateWithoutReportValuesInputSchema } from './PeriodUncheckedUpdateWithoutReportValuesInputSchema';
import { PeriodUpdateWithoutReportValuesInputSchema } from './PeriodUpdateWithoutReportValuesInputSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';

export const PeriodUpsertWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodUpsertWithoutReportValuesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PeriodUpdateWithoutReportValuesInputSchema),
        z.lazy(() => PeriodUncheckedUpdateWithoutReportValuesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PeriodCreateWithoutReportValuesInputSchema),
        z.lazy(() => PeriodUncheckedCreateWithoutReportValuesInputSchema),
      ]),
      where: z.lazy(() => PeriodWhereInputSchema).optional(),
    })
    .strict();

export default PeriodUpsertWithoutReportValuesInputSchema;

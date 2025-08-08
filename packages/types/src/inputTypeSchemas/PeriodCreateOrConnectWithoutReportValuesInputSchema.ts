import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateWithoutReportValuesInputSchema } from './PeriodCreateWithoutReportValuesInputSchema';
import { PeriodUncheckedCreateWithoutReportValuesInputSchema } from './PeriodUncheckedCreateWithoutReportValuesInputSchema';
import { PeriodWhereUniqueInputSchema } from './PeriodWhereUniqueInputSchema';

export const PeriodCreateOrConnectWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodCreateOrConnectWithoutReportValuesInput> =
  z
    .object({
      where: z.lazy(() => PeriodWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PeriodCreateWithoutReportValuesInputSchema),
        z.lazy(() => PeriodUncheckedCreateWithoutReportValuesInputSchema),
      ]),
    })
    .strict();

export default PeriodCreateOrConnectWithoutReportValuesInputSchema;

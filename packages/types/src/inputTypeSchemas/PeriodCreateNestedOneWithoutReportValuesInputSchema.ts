import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateOrConnectWithoutReportValuesInputSchema } from './PeriodCreateOrConnectWithoutReportValuesInputSchema';
import { PeriodCreateWithoutReportValuesInputSchema } from './PeriodCreateWithoutReportValuesInputSchema';
import { PeriodUncheckedCreateWithoutReportValuesInputSchema } from './PeriodUncheckedCreateWithoutReportValuesInputSchema';
import { PeriodWhereUniqueInputSchema } from './PeriodWhereUniqueInputSchema';

export const PeriodCreateNestedOneWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodCreateNestedOneWithoutReportValuesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PeriodCreateWithoutReportValuesInputSchema),
          z.lazy(() => PeriodUncheckedCreateWithoutReportValuesInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PeriodCreateOrConnectWithoutReportValuesInputSchema).optional(),
      connect: z.lazy(() => PeriodWhereUniqueInputSchema).optional(),
    })
    .strict();

export default PeriodCreateNestedOneWithoutReportValuesInputSchema;

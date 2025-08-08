import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateOrConnectWithoutReportValuesInputSchema } from './PeriodCreateOrConnectWithoutReportValuesInputSchema';
import { PeriodCreateWithoutReportValuesInputSchema } from './PeriodCreateWithoutReportValuesInputSchema';
import { PeriodUncheckedCreateWithoutReportValuesInputSchema } from './PeriodUncheckedCreateWithoutReportValuesInputSchema';
import { PeriodUncheckedUpdateWithoutReportValuesInputSchema } from './PeriodUncheckedUpdateWithoutReportValuesInputSchema';
import { PeriodUpdateToOneWithWhereWithoutReportValuesInputSchema } from './PeriodUpdateToOneWithWhereWithoutReportValuesInputSchema';
import { PeriodUpdateWithoutReportValuesInputSchema } from './PeriodUpdateWithoutReportValuesInputSchema';
import { PeriodUpsertWithoutReportValuesInputSchema } from './PeriodUpsertWithoutReportValuesInputSchema';
import { PeriodWhereUniqueInputSchema } from './PeriodWhereUniqueInputSchema';

export const PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema: z.ZodType<Prisma.PeriodUpdateOneRequiredWithoutReportValuesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PeriodCreateWithoutReportValuesInputSchema),
          z.lazy(() => PeriodUncheckedCreateWithoutReportValuesInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PeriodCreateOrConnectWithoutReportValuesInputSchema).optional(),
      upsert: z.lazy(() => PeriodUpsertWithoutReportValuesInputSchema).optional(),
      connect: z.lazy(() => PeriodWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PeriodUpdateToOneWithWhereWithoutReportValuesInputSchema),
          z.lazy(() => PeriodUpdateWithoutReportValuesInputSchema),
          z.lazy(() => PeriodUncheckedUpdateWithoutReportValuesInputSchema),
        ])
        .optional(),
    })
    .strict();

export default PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateWithoutPeriodInputSchema } from './ReportAccountValueCreateWithoutPeriodInputSchema';
import { ReportAccountValueUncheckedCreateWithoutPeriodInputSchema } from './ReportAccountValueUncheckedCreateWithoutPeriodInputSchema';
import { ReportAccountValueUncheckedUpdateWithoutPeriodInputSchema } from './ReportAccountValueUncheckedUpdateWithoutPeriodInputSchema';
import { ReportAccountValueUpdateWithoutPeriodInputSchema } from './ReportAccountValueUpdateWithoutPeriodInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ReportAccountValueUpdateWithoutPeriodInputSchema),
        z.lazy(() => ReportAccountValueUncheckedUpdateWithoutPeriodInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountValueCreateWithoutPeriodInputSchema),
        z.lazy(() => ReportAccountValueUncheckedCreateWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInputSchema;

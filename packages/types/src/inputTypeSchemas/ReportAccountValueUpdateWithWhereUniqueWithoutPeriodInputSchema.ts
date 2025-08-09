import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueUncheckedUpdateWithoutPeriodInputSchema } from './ReportAccountValueUncheckedUpdateWithoutPeriodInputSchema';
import { ReportAccountValueUpdateWithoutPeriodInputSchema } from './ReportAccountValueUpdateWithoutPeriodInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountValueUpdateWithoutPeriodInputSchema),
        z.lazy(() => ReportAccountValueUncheckedUpdateWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInputSchema;

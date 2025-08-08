import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateWithoutPeriodInputSchema } from './ReportAccountValueCreateWithoutPeriodInputSchema';
import { ReportAccountValueUncheckedCreateWithoutPeriodInputSchema } from './ReportAccountValueUncheckedCreateWithoutPeriodInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueCreateOrConnectWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueCreateOrConnectWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountValueCreateWithoutPeriodInputSchema),
        z.lazy(() => ReportAccountValueUncheckedCreateWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueCreateOrConnectWithoutPeriodInputSchema;

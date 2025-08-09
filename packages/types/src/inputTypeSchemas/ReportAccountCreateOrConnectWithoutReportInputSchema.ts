import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutReportInputSchema } from './ReportAccountCreateWithoutReportInputSchema';
import { ReportAccountUncheckedCreateWithoutReportInputSchema } from './ReportAccountUncheckedCreateWithoutReportInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountCreateOrConnectWithoutReportInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutReportInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutReportInputSchema),
      ]),
    })
    .strict();

export default ReportAccountCreateOrConnectWithoutReportInputSchema;

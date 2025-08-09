import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutReportInputSchema } from './ReportAccountCreateWithoutReportInputSchema';
import { ReportAccountUncheckedCreateWithoutReportInputSchema } from './ReportAccountUncheckedCreateWithoutReportInputSchema';
import { ReportAccountUncheckedUpdateWithoutReportInputSchema } from './ReportAccountUncheckedUpdateWithoutReportInputSchema';
import { ReportAccountUpdateWithoutReportInputSchema } from './ReportAccountUpdateWithoutReportInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountUpsertWithWhereUniqueWithoutReportInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ReportAccountUpdateWithoutReportInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutReportInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutReportInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutReportInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpsertWithWhereUniqueWithoutReportInputSchema;

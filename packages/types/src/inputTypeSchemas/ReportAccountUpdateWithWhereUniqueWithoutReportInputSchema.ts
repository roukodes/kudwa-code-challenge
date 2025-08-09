import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountUncheckedUpdateWithoutReportInputSchema } from './ReportAccountUncheckedUpdateWithoutReportInputSchema';
import { ReportAccountUpdateWithoutReportInputSchema } from './ReportAccountUpdateWithoutReportInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountUpdateWithWhereUniqueWithoutReportInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountUpdateWithoutReportInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutReportInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateWithWhereUniqueWithoutReportInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountScalarWhereInputSchema } from './ReportAccountScalarWhereInputSchema';
import { ReportAccountUncheckedUpdateManyWithoutReportInputSchema } from './ReportAccountUncheckedUpdateManyWithoutReportInputSchema';
import { ReportAccountUpdateManyMutationInputSchema } from './ReportAccountUpdateManyMutationInputSchema';

export const ReportAccountUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountUpdateManyWithWhereWithoutReportInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountUpdateManyMutationInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateManyWithoutReportInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateManyWithWhereWithoutReportInputSchema;

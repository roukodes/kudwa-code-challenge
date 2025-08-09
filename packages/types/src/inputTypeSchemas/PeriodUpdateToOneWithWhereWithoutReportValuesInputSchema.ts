import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodUncheckedUpdateWithoutReportValuesInputSchema } from './PeriodUncheckedUpdateWithoutReportValuesInputSchema';
import { PeriodUpdateWithoutReportValuesInputSchema } from './PeriodUpdateWithoutReportValuesInputSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';

export const PeriodUpdateToOneWithWhereWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodUpdateToOneWithWhereWithoutReportValuesInput> =
  z
    .object({
      where: z.lazy(() => PeriodWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => PeriodUpdateWithoutReportValuesInputSchema),
        z.lazy(() => PeriodUncheckedUpdateWithoutReportValuesInputSchema),
      ]),
    })
    .strict();

export default PeriodUpdateToOneWithWhereWithoutReportValuesInputSchema;

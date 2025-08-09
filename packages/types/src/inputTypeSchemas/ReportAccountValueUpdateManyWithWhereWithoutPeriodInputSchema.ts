import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueScalarWhereInputSchema } from './ReportAccountValueScalarWhereInputSchema';
import { ReportAccountValueUncheckedUpdateManyWithoutPeriodInputSchema } from './ReportAccountValueUncheckedUpdateManyWithoutPeriodInputSchema';
import { ReportAccountValueUpdateManyMutationInputSchema } from './ReportAccountValueUpdateManyMutationInputSchema';

export const ReportAccountValueUpdateManyWithWhereWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateManyWithWhereWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountValueUpdateManyMutationInputSchema),
        z.lazy(() => ReportAccountValueUncheckedUpdateManyWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueUpdateManyWithWhereWithoutPeriodInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueUncheckedUpdateWithoutAccountInputSchema } from './ReportAccountValueUncheckedUpdateWithoutAccountInputSchema';
import { ReportAccountValueUpdateWithoutAccountInputSchema } from './ReportAccountValueUpdateWithoutAccountInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountValueUpdateWithoutAccountInputSchema),
        z.lazy(() => ReportAccountValueUncheckedUpdateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueUpdateWithWhereUniqueWithoutAccountInputSchema;

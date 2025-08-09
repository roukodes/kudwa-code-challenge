import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountUncheckedUpdateWithoutParentAccountInputSchema } from './ReportAccountUncheckedUpdateWithoutParentAccountInputSchema';
import { ReportAccountUpdateWithoutParentAccountInputSchema } from './ReportAccountUpdateWithoutParentAccountInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpdateWithWhereUniqueWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountUpdateWithWhereUniqueWithoutParentAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountUpdateWithoutParentAccountInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutParentAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateWithWhereUniqueWithoutParentAccountInputSchema;

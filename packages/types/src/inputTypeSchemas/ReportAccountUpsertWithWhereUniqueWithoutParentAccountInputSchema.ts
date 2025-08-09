import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutParentAccountInputSchema } from './ReportAccountCreateWithoutParentAccountInputSchema';
import { ReportAccountUncheckedCreateWithoutParentAccountInputSchema } from './ReportAccountUncheckedCreateWithoutParentAccountInputSchema';
import { ReportAccountUncheckedUpdateWithoutParentAccountInputSchema } from './ReportAccountUncheckedUpdateWithoutParentAccountInputSchema';
import { ReportAccountUpdateWithoutParentAccountInputSchema } from './ReportAccountUpdateWithoutParentAccountInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpsertWithWhereUniqueWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountUpsertWithWhereUniqueWithoutParentAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ReportAccountUpdateWithoutParentAccountInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutParentAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutParentAccountInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutParentAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpsertWithWhereUniqueWithoutParentAccountInputSchema;

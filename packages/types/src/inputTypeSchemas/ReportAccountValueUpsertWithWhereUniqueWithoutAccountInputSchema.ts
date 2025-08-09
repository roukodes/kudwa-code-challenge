import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateWithoutAccountInputSchema } from './ReportAccountValueCreateWithoutAccountInputSchema';
import { ReportAccountValueUncheckedCreateWithoutAccountInputSchema } from './ReportAccountValueUncheckedCreateWithoutAccountInputSchema';
import { ReportAccountValueUncheckedUpdateWithoutAccountInputSchema } from './ReportAccountValueUncheckedUpdateWithoutAccountInputSchema';
import { ReportAccountValueUpdateWithoutAccountInputSchema } from './ReportAccountValueUpdateWithoutAccountInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ReportAccountValueUpdateWithoutAccountInputSchema),
        z.lazy(() => ReportAccountValueUncheckedUpdateWithoutAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountValueCreateWithoutAccountInputSchema),
        z.lazy(() => ReportAccountValueUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueUpsertWithWhereUniqueWithoutAccountInputSchema;

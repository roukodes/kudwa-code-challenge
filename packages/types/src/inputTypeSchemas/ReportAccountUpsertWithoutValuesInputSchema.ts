import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutValuesInputSchema } from './ReportAccountCreateWithoutValuesInputSchema';
import { ReportAccountUncheckedCreateWithoutValuesInputSchema } from './ReportAccountUncheckedCreateWithoutValuesInputSchema';
import { ReportAccountUncheckedUpdateWithoutValuesInputSchema } from './ReportAccountUncheckedUpdateWithoutValuesInputSchema';
import { ReportAccountUpdateWithoutValuesInputSchema } from './ReportAccountUpdateWithoutValuesInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountUpsertWithoutValuesInputSchema: z.ZodType<Prisma.ReportAccountUpsertWithoutValuesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ReportAccountUpdateWithoutValuesInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutValuesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutValuesInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutValuesInputSchema),
      ]),
      where: z.lazy(() => ReportAccountWhereInputSchema).optional(),
    })
    .strict();

export default ReportAccountUpsertWithoutValuesInputSchema;

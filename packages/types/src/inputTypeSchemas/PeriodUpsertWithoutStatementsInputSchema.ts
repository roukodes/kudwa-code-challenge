import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateWithoutStatementsInputSchema } from './PeriodCreateWithoutStatementsInputSchema';
import { PeriodUncheckedCreateWithoutStatementsInputSchema } from './PeriodUncheckedCreateWithoutStatementsInputSchema';
import { PeriodUncheckedUpdateWithoutStatementsInputSchema } from './PeriodUncheckedUpdateWithoutStatementsInputSchema';
import { PeriodUpdateWithoutStatementsInputSchema } from './PeriodUpdateWithoutStatementsInputSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';

export const PeriodUpsertWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodUpsertWithoutStatementsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PeriodUpdateWithoutStatementsInputSchema),
        z.lazy(() => PeriodUncheckedUpdateWithoutStatementsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PeriodCreateWithoutStatementsInputSchema),
        z.lazy(() => PeriodUncheckedCreateWithoutStatementsInputSchema),
      ]),
      where: z.lazy(() => PeriodWhereInputSchema).optional(),
    })
    .strict();

export default PeriodUpsertWithoutStatementsInputSchema;

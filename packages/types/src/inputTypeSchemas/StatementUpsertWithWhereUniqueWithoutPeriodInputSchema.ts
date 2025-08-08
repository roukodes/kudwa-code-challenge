import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateWithoutPeriodInputSchema } from './StatementCreateWithoutPeriodInputSchema';
import { StatementUncheckedCreateWithoutPeriodInputSchema } from './StatementUncheckedCreateWithoutPeriodInputSchema';
import { StatementUncheckedUpdateWithoutPeriodInputSchema } from './StatementUncheckedUpdateWithoutPeriodInputSchema';
import { StatementUpdateWithoutPeriodInputSchema } from './StatementUpdateWithoutPeriodInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUpsertWithWhereUniqueWithoutPeriodInputSchema: z.ZodType<Prisma.StatementUpsertWithWhereUniqueWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => StatementUpdateWithoutPeriodInputSchema),
        z.lazy(() => StatementUncheckedUpdateWithoutPeriodInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementCreateWithoutPeriodInputSchema),
        z.lazy(() => StatementUncheckedCreateWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default StatementUpsertWithWhereUniqueWithoutPeriodInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementUncheckedUpdateWithoutPeriodInputSchema } from './StatementUncheckedUpdateWithoutPeriodInputSchema';
import { StatementUpdateWithoutPeriodInputSchema } from './StatementUpdateWithoutPeriodInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUpdateWithWhereUniqueWithoutPeriodInputSchema: z.ZodType<Prisma.StatementUpdateWithWhereUniqueWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => StatementUpdateWithoutPeriodInputSchema),
        z.lazy(() => StatementUncheckedUpdateWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default StatementUpdateWithWhereUniqueWithoutPeriodInputSchema;

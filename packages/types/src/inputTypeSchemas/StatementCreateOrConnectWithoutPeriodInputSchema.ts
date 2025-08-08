import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateWithoutPeriodInputSchema } from './StatementCreateWithoutPeriodInputSchema';
import { StatementUncheckedCreateWithoutPeriodInputSchema } from './StatementUncheckedCreateWithoutPeriodInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementCreateOrConnectWithoutPeriodInputSchema: z.ZodType<Prisma.StatementCreateOrConnectWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementCreateWithoutPeriodInputSchema),
        z.lazy(() => StatementUncheckedCreateWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default StatementCreateOrConnectWithoutPeriodInputSchema;

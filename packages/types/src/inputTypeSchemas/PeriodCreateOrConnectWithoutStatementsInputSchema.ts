import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateWithoutStatementsInputSchema } from './PeriodCreateWithoutStatementsInputSchema';
import { PeriodUncheckedCreateWithoutStatementsInputSchema } from './PeriodUncheckedCreateWithoutStatementsInputSchema';
import { PeriodWhereUniqueInputSchema } from './PeriodWhereUniqueInputSchema';

export const PeriodCreateOrConnectWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodCreateOrConnectWithoutStatementsInput> =
  z
    .object({
      where: z.lazy(() => PeriodWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PeriodCreateWithoutStatementsInputSchema),
        z.lazy(() => PeriodUncheckedCreateWithoutStatementsInputSchema),
      ]),
    })
    .strict();

export default PeriodCreateOrConnectWithoutStatementsInputSchema;

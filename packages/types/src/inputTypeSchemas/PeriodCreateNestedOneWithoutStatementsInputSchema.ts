import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateOrConnectWithoutStatementsInputSchema } from './PeriodCreateOrConnectWithoutStatementsInputSchema';
import { PeriodCreateWithoutStatementsInputSchema } from './PeriodCreateWithoutStatementsInputSchema';
import { PeriodUncheckedCreateWithoutStatementsInputSchema } from './PeriodUncheckedCreateWithoutStatementsInputSchema';
import { PeriodWhereUniqueInputSchema } from './PeriodWhereUniqueInputSchema';

export const PeriodCreateNestedOneWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodCreateNestedOneWithoutStatementsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PeriodCreateWithoutStatementsInputSchema),
          z.lazy(() => PeriodUncheckedCreateWithoutStatementsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PeriodCreateOrConnectWithoutStatementsInputSchema).optional(),
      connect: z.lazy(() => PeriodWhereUniqueInputSchema).optional(),
    })
    .strict();

export default PeriodCreateNestedOneWithoutStatementsInputSchema;

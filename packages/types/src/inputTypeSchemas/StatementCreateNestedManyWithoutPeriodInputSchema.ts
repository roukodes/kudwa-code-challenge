import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyPeriodInputEnvelopeSchema } from './StatementCreateManyPeriodInputEnvelopeSchema';
import { StatementCreateOrConnectWithoutPeriodInputSchema } from './StatementCreateOrConnectWithoutPeriodInputSchema';
import { StatementCreateWithoutPeriodInputSchema } from './StatementCreateWithoutPeriodInputSchema';
import { StatementUncheckedCreateWithoutPeriodInputSchema } from './StatementUncheckedCreateWithoutPeriodInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementCreateNestedManyWithoutPeriodInputSchema: z.ZodType<Prisma.StatementCreateNestedManyWithoutPeriodInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementCreateWithoutPeriodInputSchema),
          z.lazy(() => StatementCreateWithoutPeriodInputSchema).array(),
          z.lazy(() => StatementUncheckedCreateWithoutPeriodInputSchema),
          z.lazy(() => StatementUncheckedCreateWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StatementCreateOrConnectWithoutPeriodInputSchema),
          z.lazy(() => StatementCreateOrConnectWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => StatementCreateManyPeriodInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => StatementWhereUniqueInputSchema),
          z.lazy(() => StatementWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementCreateNestedManyWithoutPeriodInputSchema;

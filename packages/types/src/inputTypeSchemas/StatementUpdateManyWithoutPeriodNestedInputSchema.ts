import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyPeriodInputEnvelopeSchema } from './StatementCreateManyPeriodInputEnvelopeSchema';
import { StatementCreateOrConnectWithoutPeriodInputSchema } from './StatementCreateOrConnectWithoutPeriodInputSchema';
import { StatementCreateWithoutPeriodInputSchema } from './StatementCreateWithoutPeriodInputSchema';
import { StatementScalarWhereInputSchema } from './StatementScalarWhereInputSchema';
import { StatementUncheckedCreateWithoutPeriodInputSchema } from './StatementUncheckedCreateWithoutPeriodInputSchema';
import { StatementUpdateManyWithWhereWithoutPeriodInputSchema } from './StatementUpdateManyWithWhereWithoutPeriodInputSchema';
import { StatementUpdateWithWhereUniqueWithoutPeriodInputSchema } from './StatementUpdateWithWhereUniqueWithoutPeriodInputSchema';
import { StatementUpsertWithWhereUniqueWithoutPeriodInputSchema } from './StatementUpsertWithWhereUniqueWithoutPeriodInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUpdateManyWithoutPeriodNestedInputSchema: z.ZodType<Prisma.StatementUpdateManyWithoutPeriodNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => StatementUpsertWithWhereUniqueWithoutPeriodInputSchema),
          z.lazy(() => StatementUpsertWithWhereUniqueWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => StatementCreateManyPeriodInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => StatementWhereUniqueInputSchema),
          z.lazy(() => StatementWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StatementWhereUniqueInputSchema),
          z.lazy(() => StatementWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StatementWhereUniqueInputSchema),
          z.lazy(() => StatementWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StatementWhereUniqueInputSchema),
          z.lazy(() => StatementWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => StatementUpdateWithWhereUniqueWithoutPeriodInputSchema),
          z.lazy(() => StatementUpdateWithWhereUniqueWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StatementUpdateManyWithWhereWithoutPeriodInputSchema),
          z.lazy(() => StatementUpdateManyWithWhereWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StatementScalarWhereInputSchema),
          z.lazy(() => StatementScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementUpdateManyWithoutPeriodNestedInputSchema;

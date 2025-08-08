import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyCompanyInputEnvelopeSchema } from './StatementCreateManyCompanyInputEnvelopeSchema';
import { StatementCreateOrConnectWithoutCompanyInputSchema } from './StatementCreateOrConnectWithoutCompanyInputSchema';
import { StatementCreateWithoutCompanyInputSchema } from './StatementCreateWithoutCompanyInputSchema';
import { StatementScalarWhereInputSchema } from './StatementScalarWhereInputSchema';
import { StatementUncheckedCreateWithoutCompanyInputSchema } from './StatementUncheckedCreateWithoutCompanyInputSchema';
import { StatementUpdateManyWithWhereWithoutCompanyInputSchema } from './StatementUpdateManyWithWhereWithoutCompanyInputSchema';
import { StatementUpdateWithWhereUniqueWithoutCompanyInputSchema } from './StatementUpdateWithWhereUniqueWithoutCompanyInputSchema';
import { StatementUpsertWithWhereUniqueWithoutCompanyInputSchema } from './StatementUpsertWithWhereUniqueWithoutCompanyInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.StatementUncheckedUpdateManyWithoutCompanyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementCreateWithoutCompanyInputSchema),
          z.lazy(() => StatementCreateWithoutCompanyInputSchema).array(),
          z.lazy(() => StatementUncheckedCreateWithoutCompanyInputSchema),
          z.lazy(() => StatementUncheckedCreateWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StatementCreateOrConnectWithoutCompanyInputSchema),
          z.lazy(() => StatementCreateOrConnectWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => StatementUpsertWithWhereUniqueWithoutCompanyInputSchema),
          z.lazy(() => StatementUpsertWithWhereUniqueWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => StatementCreateManyCompanyInputEnvelopeSchema).optional(),
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
          z.lazy(() => StatementUpdateWithWhereUniqueWithoutCompanyInputSchema),
          z.lazy(() => StatementUpdateWithWhereUniqueWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StatementUpdateManyWithWhereWithoutCompanyInputSchema),
          z.lazy(() => StatementUpdateManyWithWhereWithoutCompanyInputSchema).array(),
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

export default StatementUncheckedUpdateManyWithoutCompanyNestedInputSchema;

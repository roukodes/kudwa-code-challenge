import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyPeriodInputEnvelopeSchema } from './ReportAccountValueCreateManyPeriodInputEnvelopeSchema';
import { ReportAccountValueCreateOrConnectWithoutPeriodInputSchema } from './ReportAccountValueCreateOrConnectWithoutPeriodInputSchema';
import { ReportAccountValueCreateWithoutPeriodInputSchema } from './ReportAccountValueCreateWithoutPeriodInputSchema';
import { ReportAccountValueScalarWhereInputSchema } from './ReportAccountValueScalarWhereInputSchema';
import { ReportAccountValueUncheckedCreateWithoutPeriodInputSchema } from './ReportAccountValueUncheckedCreateWithoutPeriodInputSchema';
import { ReportAccountValueUpdateManyWithWhereWithoutPeriodInputSchema } from './ReportAccountValueUpdateManyWithWhereWithoutPeriodInputSchema';
import { ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInputSchema } from './ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInputSchema';
import { ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInputSchema } from './ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueUncheckedUpdateManyWithoutPeriodNestedInputSchema: z.ZodType<Prisma.ReportAccountValueUncheckedUpdateManyWithoutPeriodNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountValueCreateWithoutPeriodInputSchema),
          z.lazy(() => ReportAccountValueCreateWithoutPeriodInputSchema).array(),
          z.lazy(() => ReportAccountValueUncheckedCreateWithoutPeriodInputSchema),
          z.lazy(() => ReportAccountValueUncheckedCreateWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportAccountValueCreateOrConnectWithoutPeriodInputSchema),
          z.lazy(() => ReportAccountValueCreateOrConnectWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInputSchema),
          z.lazy(() => ReportAccountValueUpsertWithWhereUniqueWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportAccountValueCreateManyPeriodInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInputSchema),
          z.lazy(() => ReportAccountValueUpdateWithWhereUniqueWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReportAccountValueUpdateManyWithWhereWithoutPeriodInputSchema),
          z.lazy(() => ReportAccountValueUpdateManyWithWhereWithoutPeriodInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReportAccountValueScalarWhereInputSchema),
          z.lazy(() => ReportAccountValueScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountValueUncheckedUpdateManyWithoutPeriodNestedInputSchema;

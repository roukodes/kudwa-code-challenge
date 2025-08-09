import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyAccountInputEnvelopeSchema } from './ReportAccountValueCreateManyAccountInputEnvelopeSchema';
import { ReportAccountValueCreateOrConnectWithoutAccountInputSchema } from './ReportAccountValueCreateOrConnectWithoutAccountInputSchema';
import { ReportAccountValueCreateWithoutAccountInputSchema } from './ReportAccountValueCreateWithoutAccountInputSchema';
import { ReportAccountValueScalarWhereInputSchema } from './ReportAccountValueScalarWhereInputSchema';
import { ReportAccountValueUncheckedCreateWithoutAccountInputSchema } from './ReportAccountValueUncheckedCreateWithoutAccountInputSchema';
import { ReportAccountValueUpdateManyWithWhereWithoutAccountInputSchema } from './ReportAccountValueUpdateManyWithWhereWithoutAccountInputSchema';
import { ReportAccountValueUpdateWithWhereUniqueWithoutAccountInputSchema } from './ReportAccountValueUpdateWithWhereUniqueWithoutAccountInputSchema';
import { ReportAccountValueUpsertWithWhereUniqueWithoutAccountInputSchema } from './ReportAccountValueUpsertWithWhereUniqueWithoutAccountInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountValueCreateWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueCreateWithoutAccountInputSchema).array(),
          z.lazy(() => ReportAccountValueUncheckedCreateWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueUncheckedCreateWithoutAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportAccountValueCreateOrConnectWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueCreateOrConnectWithoutAccountInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ReportAccountValueUpsertWithWhereUniqueWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueUpsertWithWhereUniqueWithoutAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportAccountValueCreateManyAccountInputEnvelopeSchema).optional(),
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
          z.lazy(() => ReportAccountValueUpdateWithWhereUniqueWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueUpdateWithWhereUniqueWithoutAccountInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReportAccountValueUpdateManyWithWhereWithoutAccountInputSchema),
          z.lazy(() => ReportAccountValueUpdateManyWithWhereWithoutAccountInputSchema).array(),
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

export default ReportAccountValueUpdateManyWithoutAccountNestedInputSchema;

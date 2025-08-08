import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyParentAccountInputEnvelopeSchema } from './ReportAccountCreateManyParentAccountInputEnvelopeSchema';
import { ReportAccountCreateOrConnectWithoutParentAccountInputSchema } from './ReportAccountCreateOrConnectWithoutParentAccountInputSchema';
import { ReportAccountCreateWithoutParentAccountInputSchema } from './ReportAccountCreateWithoutParentAccountInputSchema';
import { ReportAccountScalarWhereInputSchema } from './ReportAccountScalarWhereInputSchema';
import { ReportAccountUncheckedCreateWithoutParentAccountInputSchema } from './ReportAccountUncheckedCreateWithoutParentAccountInputSchema';
import { ReportAccountUpdateManyWithWhereWithoutParentAccountInputSchema } from './ReportAccountUpdateManyWithWhereWithoutParentAccountInputSchema';
import { ReportAccountUpdateWithWhereUniqueWithoutParentAccountInputSchema } from './ReportAccountUpdateWithWhereUniqueWithoutParentAccountInputSchema';
import { ReportAccountUpsertWithWhereUniqueWithoutParentAccountInputSchema } from './ReportAccountUpsertWithWhereUniqueWithoutParentAccountInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUncheckedUpdateManyWithoutParentAccountNestedInputSchema: z.ZodType<Prisma.ReportAccountUncheckedUpdateManyWithoutParentAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountCreateWithoutParentAccountInputSchema).array(),
          z.lazy(() => ReportAccountUncheckedCreateWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportAccountCreateOrConnectWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountCreateOrConnectWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ReportAccountUpsertWithWhereUniqueWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountUpsertWithWhereUniqueWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportAccountCreateManyParentAccountInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => ReportAccountWhereUniqueInputSchema),
          z.lazy(() => ReportAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReportAccountWhereUniqueInputSchema),
          z.lazy(() => ReportAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReportAccountWhereUniqueInputSchema),
          z.lazy(() => ReportAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReportAccountWhereUniqueInputSchema),
          z.lazy(() => ReportAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ReportAccountUpdateWithWhereUniqueWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountUpdateWithWhereUniqueWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReportAccountUpdateManyWithWhereWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountUpdateManyWithWhereWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReportAccountScalarWhereInputSchema),
          z.lazy(() => ReportAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountUncheckedUpdateManyWithoutParentAccountNestedInputSchema;

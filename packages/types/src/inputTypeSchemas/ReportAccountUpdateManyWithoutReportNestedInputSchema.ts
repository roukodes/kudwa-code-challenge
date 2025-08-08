import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyReportInputEnvelopeSchema } from './ReportAccountCreateManyReportInputEnvelopeSchema';
import { ReportAccountCreateOrConnectWithoutReportInputSchema } from './ReportAccountCreateOrConnectWithoutReportInputSchema';
import { ReportAccountCreateWithoutReportInputSchema } from './ReportAccountCreateWithoutReportInputSchema';
import { ReportAccountScalarWhereInputSchema } from './ReportAccountScalarWhereInputSchema';
import { ReportAccountUncheckedCreateWithoutReportInputSchema } from './ReportAccountUncheckedCreateWithoutReportInputSchema';
import { ReportAccountUpdateManyWithWhereWithoutReportInputSchema } from './ReportAccountUpdateManyWithWhereWithoutReportInputSchema';
import { ReportAccountUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportAccountUpdateWithWhereUniqueWithoutReportInputSchema';
import { ReportAccountUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportAccountUpsertWithWhereUniqueWithoutReportInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportAccountUpdateManyWithoutReportNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutReportInputSchema),
          z.lazy(() => ReportAccountCreateWithoutReportInputSchema).array(),
          z.lazy(() => ReportAccountUncheckedCreateWithoutReportInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutReportInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportAccountCreateOrConnectWithoutReportInputSchema),
          z.lazy(() => ReportAccountCreateOrConnectWithoutReportInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ReportAccountUpsertWithWhereUniqueWithoutReportInputSchema),
          z.lazy(() => ReportAccountUpsertWithWhereUniqueWithoutReportInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportAccountCreateManyReportInputEnvelopeSchema).optional(),
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
          z.lazy(() => ReportAccountUpdateWithWhereUniqueWithoutReportInputSchema),
          z.lazy(() => ReportAccountUpdateWithWhereUniqueWithoutReportInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReportAccountUpdateManyWithWhereWithoutReportInputSchema),
          z.lazy(() => ReportAccountUpdateManyWithWhereWithoutReportInputSchema).array(),
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

export default ReportAccountUpdateManyWithoutReportNestedInputSchema;

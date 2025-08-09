import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateManyCompanyInputEnvelopeSchema } from './ReportHeaderCreateManyCompanyInputEnvelopeSchema';
import { ReportHeaderCreateOrConnectWithoutCompanyInputSchema } from './ReportHeaderCreateOrConnectWithoutCompanyInputSchema';
import { ReportHeaderCreateWithoutCompanyInputSchema } from './ReportHeaderCreateWithoutCompanyInputSchema';
import { ReportHeaderScalarWhereInputSchema } from './ReportHeaderScalarWhereInputSchema';
import { ReportHeaderUncheckedCreateWithoutCompanyInputSchema } from './ReportHeaderUncheckedCreateWithoutCompanyInputSchema';
import { ReportHeaderUpdateManyWithWhereWithoutCompanyInputSchema } from './ReportHeaderUpdateManyWithWhereWithoutCompanyInputSchema';
import { ReportHeaderUpdateWithWhereUniqueWithoutCompanyInputSchema } from './ReportHeaderUpdateWithWhereUniqueWithoutCompanyInputSchema';
import { ReportHeaderUpsertWithWhereUniqueWithoutCompanyInputSchema } from './ReportHeaderUpsertWithWhereUniqueWithoutCompanyInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.ReportHeaderUncheckedUpdateManyWithoutCompanyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportHeaderCreateWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderCreateWithoutCompanyInputSchema).array(),
          z.lazy(() => ReportHeaderUncheckedCreateWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderUncheckedCreateWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportHeaderCreateOrConnectWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderCreateOrConnectWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ReportHeaderUpsertWithWhereUniqueWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderUpsertWithWhereUniqueWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportHeaderCreateManyCompanyInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => ReportHeaderWhereUniqueInputSchema),
          z.lazy(() => ReportHeaderWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReportHeaderWhereUniqueInputSchema),
          z.lazy(() => ReportHeaderWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReportHeaderWhereUniqueInputSchema),
          z.lazy(() => ReportHeaderWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReportHeaderWhereUniqueInputSchema),
          z.lazy(() => ReportHeaderWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ReportHeaderUpdateWithWhereUniqueWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderUpdateWithWhereUniqueWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReportHeaderUpdateManyWithWhereWithoutCompanyInputSchema),
          z.lazy(() => ReportHeaderUpdateManyWithWhereWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReportHeaderScalarWhereInputSchema),
          z.lazy(() => ReportHeaderScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportHeaderUncheckedUpdateManyWithoutCompanyNestedInputSchema;

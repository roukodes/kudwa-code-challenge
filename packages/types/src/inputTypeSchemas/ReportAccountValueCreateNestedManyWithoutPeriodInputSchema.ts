import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyPeriodInputEnvelopeSchema } from './ReportAccountValueCreateManyPeriodInputEnvelopeSchema';
import { ReportAccountValueCreateOrConnectWithoutPeriodInputSchema } from './ReportAccountValueCreateOrConnectWithoutPeriodInputSchema';
import { ReportAccountValueCreateWithoutPeriodInputSchema } from './ReportAccountValueCreateWithoutPeriodInputSchema';
import { ReportAccountValueUncheckedCreateWithoutPeriodInputSchema } from './ReportAccountValueUncheckedCreateWithoutPeriodInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueCreateNestedManyWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueCreateNestedManyWithoutPeriodInput> =
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
      createMany: z.lazy(() => ReportAccountValueCreateManyPeriodInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
          z.lazy(() => ReportAccountValueWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountValueCreateNestedManyWithoutPeriodInputSchema;

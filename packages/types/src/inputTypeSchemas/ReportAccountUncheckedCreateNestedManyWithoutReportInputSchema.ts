import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyReportInputEnvelopeSchema } from './ReportAccountCreateManyReportInputEnvelopeSchema';
import { ReportAccountCreateOrConnectWithoutReportInputSchema } from './ReportAccountCreateOrConnectWithoutReportInputSchema';
import { ReportAccountCreateWithoutReportInputSchema } from './ReportAccountCreateWithoutReportInputSchema';
import { ReportAccountUncheckedCreateWithoutReportInputSchema } from './ReportAccountUncheckedCreateWithoutReportInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountUncheckedCreateNestedManyWithoutReportInput> =
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
      createMany: z.lazy(() => ReportAccountCreateManyReportInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => ReportAccountWhereUniqueInputSchema),
          z.lazy(() => ReportAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountUncheckedCreateNestedManyWithoutReportInputSchema;

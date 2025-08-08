import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyReportInputSchema } from './ReportAccountCreateManyReportInputSchema';

export const ReportAccountCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportAccountCreateManyReportInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ReportAccountCreateManyReportInputSchema),
        z.lazy(() => ReportAccountCreateManyReportInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportAccountCreateManyReportInputEnvelopeSchema;

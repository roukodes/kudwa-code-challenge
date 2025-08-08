import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyPeriodInputSchema } from './ReportAccountValueCreateManyPeriodInputSchema';

export const ReportAccountValueCreateManyPeriodInputEnvelopeSchema: z.ZodType<Prisma.ReportAccountValueCreateManyPeriodInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ReportAccountValueCreateManyPeriodInputSchema),
        z.lazy(() => ReportAccountValueCreateManyPeriodInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportAccountValueCreateManyPeriodInputEnvelopeSchema;

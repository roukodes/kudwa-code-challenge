import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyAccountInputSchema } from './ReportAccountValueCreateManyAccountInputSchema';

export const ReportAccountValueCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.ReportAccountValueCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ReportAccountValueCreateManyAccountInputSchema),
        z.lazy(() => ReportAccountValueCreateManyAccountInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportAccountValueCreateManyAccountInputEnvelopeSchema;

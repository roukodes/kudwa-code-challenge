import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateManyCompanyInputSchema } from './ReportHeaderCreateManyCompanyInputSchema';

export const ReportHeaderCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.ReportHeaderCreateManyCompanyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ReportHeaderCreateManyCompanyInputSchema),
        z.lazy(() => ReportHeaderCreateManyCompanyInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportHeaderCreateManyCompanyInputEnvelopeSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyParentAccountInputSchema } from './ReportAccountCreateManyParentAccountInputSchema';

export const ReportAccountCreateManyParentAccountInputEnvelopeSchema: z.ZodType<Prisma.ReportAccountCreateManyParentAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ReportAccountCreateManyParentAccountInputSchema),
        z.lazy(() => ReportAccountCreateManyParentAccountInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportAccountCreateManyParentAccountInputEnvelopeSchema;

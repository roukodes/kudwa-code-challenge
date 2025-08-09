import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyCompanyInputSchema } from './StatementCreateManyCompanyInputSchema';

export const StatementCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.StatementCreateManyCompanyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StatementCreateManyCompanyInputSchema),
        z.lazy(() => StatementCreateManyCompanyInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementCreateManyCompanyInputEnvelopeSchema;

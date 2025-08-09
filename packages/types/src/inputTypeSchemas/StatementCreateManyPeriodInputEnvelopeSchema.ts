import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyPeriodInputSchema } from './StatementCreateManyPeriodInputSchema';

export const StatementCreateManyPeriodInputEnvelopeSchema: z.ZodType<Prisma.StatementCreateManyPeriodInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StatementCreateManyPeriodInputSchema),
        z.lazy(() => StatementCreateManyPeriodInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementCreateManyPeriodInputEnvelopeSchema;

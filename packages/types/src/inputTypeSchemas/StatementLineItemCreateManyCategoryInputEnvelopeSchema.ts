import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyCategoryInputSchema } from './StatementLineItemCreateManyCategoryInputSchema';

export const StatementLineItemCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.StatementLineItemCreateManyCategoryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StatementLineItemCreateManyCategoryInputSchema),
        z.lazy(() => StatementLineItemCreateManyCategoryInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementLineItemCreateManyCategoryInputEnvelopeSchema;

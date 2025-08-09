import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyParentLineItemInputSchema } from './StatementLineItemCreateManyParentLineItemInputSchema';

export const StatementLineItemCreateManyParentLineItemInputEnvelopeSchema: z.ZodType<Prisma.StatementLineItemCreateManyParentLineItemInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StatementLineItemCreateManyParentLineItemInputSchema),
        z.lazy(() => StatementLineItemCreateManyParentLineItemInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementLineItemCreateManyParentLineItemInputEnvelopeSchema;

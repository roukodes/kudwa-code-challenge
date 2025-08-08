import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyInputSchema } from '../inputTypeSchemas/StatementLineItemCreateManyInputSchema';

export const StatementLineItemCreateManyArgsSchema: z.ZodType<Prisma.StatementLineItemCreateManyArgs> =
  z
    .object({
      data: z.union([
        StatementLineItemCreateManyInputSchema,
        StatementLineItemCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementLineItemCreateManyArgsSchema;

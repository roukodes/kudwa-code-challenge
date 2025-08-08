import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyInputSchema } from '../inputTypeSchemas/StatementLineItemCreateManyInputSchema';

export const StatementLineItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StatementLineItemCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        StatementLineItemCreateManyInputSchema,
        StatementLineItemCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementLineItemCreateManyAndReturnArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyInputSchema } from '../inputTypeSchemas/StatementCreateManyInputSchema';

export const StatementCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StatementCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([StatementCreateManyInputSchema, StatementCreateManyInputSchema.array()]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementCreateManyAndReturnArgsSchema;

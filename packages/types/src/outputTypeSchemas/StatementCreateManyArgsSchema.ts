import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyInputSchema } from '../inputTypeSchemas/StatementCreateManyInputSchema';

export const StatementCreateManyArgsSchema: z.ZodType<Prisma.StatementCreateManyArgs> = z
  .object({
    data: z.union([StatementCreateManyInputSchema, StatementCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export default StatementCreateManyArgsSchema;

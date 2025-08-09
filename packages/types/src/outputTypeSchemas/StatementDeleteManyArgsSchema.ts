import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementWhereInputSchema } from '../inputTypeSchemas/StatementWhereInputSchema';

export const StatementDeleteManyArgsSchema: z.ZodType<Prisma.StatementDeleteManyArgs> = z
  .object({
    where: StatementWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export default StatementDeleteManyArgsSchema;

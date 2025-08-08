import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryWhereInputSchema } from '../inputTypeSchemas/StatementCategoryWhereInputSchema';

export const StatementCategoryDeleteManyArgsSchema: z.ZodType<Prisma.StatementCategoryDeleteManyArgs> =
  z
    .object({
      where: StatementCategoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default StatementCategoryDeleteManyArgsSchema;

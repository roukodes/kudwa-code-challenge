import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateManyInputSchema } from '../inputTypeSchemas/StatementCategoryCreateManyInputSchema';

export const StatementCategoryCreateManyArgsSchema: z.ZodType<Prisma.StatementCategoryCreateManyArgs> =
  z
    .object({
      data: z.union([
        StatementCategoryCreateManyInputSchema,
        StatementCategoryCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementCategoryCreateManyArgsSchema;

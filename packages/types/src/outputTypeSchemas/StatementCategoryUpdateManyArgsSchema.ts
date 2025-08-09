import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StatementCategoryUncheckedUpdateManyInputSchema';
import { StatementCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/StatementCategoryUpdateManyMutationInputSchema';
import { StatementCategoryWhereInputSchema } from '../inputTypeSchemas/StatementCategoryWhereInputSchema';

export const StatementCategoryUpdateManyArgsSchema: z.ZodType<Prisma.StatementCategoryUpdateManyArgs> =
  z
    .object({
      data: z.union([
        StatementCategoryUpdateManyMutationInputSchema,
        StatementCategoryUncheckedUpdateManyInputSchema,
      ]),
      where: StatementCategoryWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default StatementCategoryUpdateManyArgsSchema;

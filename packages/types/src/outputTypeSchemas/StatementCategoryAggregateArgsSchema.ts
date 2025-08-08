import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/StatementCategoryOrderByWithRelationInputSchema';
import { StatementCategoryWhereInputSchema } from '../inputTypeSchemas/StatementCategoryWhereInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryAggregateArgsSchema: z.ZodType<Prisma.StatementCategoryAggregateArgs> =
  z
    .object({
      where: StatementCategoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          StatementCategoryOrderByWithRelationInputSchema.array(),
          StatementCategoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StatementCategoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default StatementCategoryAggregateArgsSchema;

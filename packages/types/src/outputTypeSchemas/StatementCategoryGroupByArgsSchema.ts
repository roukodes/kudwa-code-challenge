import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StatementCategoryOrderByWithAggregationInputSchema';
import { StatementCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/StatementCategoryScalarFieldEnumSchema';
import { StatementCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StatementCategoryScalarWhereWithAggregatesInputSchema';
import { StatementCategoryWhereInputSchema } from '../inputTypeSchemas/StatementCategoryWhereInputSchema';

export const StatementCategoryGroupByArgsSchema: z.ZodType<Prisma.StatementCategoryGroupByArgs> = z
  .object({
    where: StatementCategoryWhereInputSchema.optional(),
    orderBy: z
      .union([
        StatementCategoryOrderByWithAggregationInputSchema.array(),
        StatementCategoryOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: StatementCategoryScalarFieldEnumSchema.array(),
    having: StatementCategoryScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default StatementCategoryGroupByArgsSchema;

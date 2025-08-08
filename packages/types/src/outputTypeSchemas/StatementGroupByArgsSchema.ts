import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StatementOrderByWithAggregationInputSchema';
import { StatementScalarFieldEnumSchema } from '../inputTypeSchemas/StatementScalarFieldEnumSchema';
import { StatementScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StatementScalarWhereWithAggregatesInputSchema';
import { StatementWhereInputSchema } from '../inputTypeSchemas/StatementWhereInputSchema';

export const StatementGroupByArgsSchema: z.ZodType<Prisma.StatementGroupByArgs> = z
  .object({
    where: StatementWhereInputSchema.optional(),
    orderBy: z
      .union([
        StatementOrderByWithAggregationInputSchema.array(),
        StatementOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: StatementScalarFieldEnumSchema.array(),
    having: StatementScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default StatementGroupByArgsSchema;

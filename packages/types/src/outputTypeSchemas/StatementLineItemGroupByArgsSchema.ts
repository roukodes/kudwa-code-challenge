import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StatementLineItemOrderByWithAggregationInputSchema';
import { StatementLineItemScalarFieldEnumSchema } from '../inputTypeSchemas/StatementLineItemScalarFieldEnumSchema';
import { StatementLineItemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StatementLineItemScalarWhereWithAggregatesInputSchema';
import { StatementLineItemWhereInputSchema } from '../inputTypeSchemas/StatementLineItemWhereInputSchema';

export const StatementLineItemGroupByArgsSchema: z.ZodType<Prisma.StatementLineItemGroupByArgs> = z
  .object({
    where: StatementLineItemWhereInputSchema.optional(),
    orderBy: z
      .union([
        StatementLineItemOrderByWithAggregationInputSchema.array(),
        StatementLineItemOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: StatementLineItemScalarFieldEnumSchema.array(),
    having: StatementLineItemScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default StatementLineItemGroupByArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/StatementLineItemOrderByWithRelationInputSchema';
import { StatementLineItemWhereInputSchema } from '../inputTypeSchemas/StatementLineItemWhereInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from '../inputTypeSchemas/StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemAggregateArgsSchema: z.ZodType<Prisma.StatementLineItemAggregateArgs> =
  z
    .object({
      where: StatementLineItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StatementLineItemOrderByWithRelationInputSchema.array(),
          StatementLineItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StatementLineItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default StatementLineItemAggregateArgsSchema;

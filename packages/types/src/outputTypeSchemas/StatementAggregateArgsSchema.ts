import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementOrderByWithRelationInputSchema } from '../inputTypeSchemas/StatementOrderByWithRelationInputSchema';
import { StatementWhereInputSchema } from '../inputTypeSchemas/StatementWhereInputSchema';
import { StatementWhereUniqueInputSchema } from '../inputTypeSchemas/StatementWhereUniqueInputSchema';

export const StatementAggregateArgsSchema: z.ZodType<Prisma.StatementAggregateArgs> = z
  .object({
    where: StatementWhereInputSchema.optional(),
    orderBy: z
      .union([
        StatementOrderByWithRelationInputSchema.array(),
        StatementOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: StatementWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default StatementAggregateArgsSchema;

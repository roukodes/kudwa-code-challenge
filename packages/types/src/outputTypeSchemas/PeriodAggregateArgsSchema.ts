import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodOrderByWithRelationInputSchema } from '../inputTypeSchemas/PeriodOrderByWithRelationInputSchema';
import { PeriodWhereInputSchema } from '../inputTypeSchemas/PeriodWhereInputSchema';
import { PeriodWhereUniqueInputSchema } from '../inputTypeSchemas/PeriodWhereUniqueInputSchema';

export const PeriodAggregateArgsSchema: z.ZodType<Prisma.PeriodAggregateArgs> = z
  .object({
    where: PeriodWhereInputSchema.optional(),
    orderBy: z
      .union([PeriodOrderByWithRelationInputSchema.array(), PeriodOrderByWithRelationInputSchema])
      .optional(),
    cursor: PeriodWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default PeriodAggregateArgsSchema;

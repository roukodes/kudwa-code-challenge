import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PeriodOrderByWithAggregationInputSchema';
import { PeriodScalarFieldEnumSchema } from '../inputTypeSchemas/PeriodScalarFieldEnumSchema';
import { PeriodScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PeriodScalarWhereWithAggregatesInputSchema';
import { PeriodWhereInputSchema } from '../inputTypeSchemas/PeriodWhereInputSchema';

export const PeriodGroupByArgsSchema: z.ZodType<Prisma.PeriodGroupByArgs> = z
  .object({
    where: PeriodWhereInputSchema.optional(),
    orderBy: z
      .union([
        PeriodOrderByWithAggregationInputSchema.array(),
        PeriodOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: PeriodScalarFieldEnumSchema.array(),
    having: PeriodScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default PeriodGroupByArgsSchema;

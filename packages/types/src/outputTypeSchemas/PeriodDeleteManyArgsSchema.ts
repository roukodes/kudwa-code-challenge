import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodWhereInputSchema } from '../inputTypeSchemas/PeriodWhereInputSchema';

export const PeriodDeleteManyArgsSchema: z.ZodType<Prisma.PeriodDeleteManyArgs> = z
  .object({
    where: PeriodWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export default PeriodDeleteManyArgsSchema;

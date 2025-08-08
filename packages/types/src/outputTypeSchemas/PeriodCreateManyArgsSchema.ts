import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateManyInputSchema } from '../inputTypeSchemas/PeriodCreateManyInputSchema';

export const PeriodCreateManyArgsSchema: z.ZodType<Prisma.PeriodCreateManyArgs> = z
  .object({
    data: z.union([PeriodCreateManyInputSchema, PeriodCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export default PeriodCreateManyArgsSchema;

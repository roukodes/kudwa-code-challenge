import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateManyInputSchema } from '../inputTypeSchemas/PeriodCreateManyInputSchema';

export const PeriodCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PeriodCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([PeriodCreateManyInputSchema, PeriodCreateManyInputSchema.array()]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default PeriodCreateManyAndReturnArgsSchema;

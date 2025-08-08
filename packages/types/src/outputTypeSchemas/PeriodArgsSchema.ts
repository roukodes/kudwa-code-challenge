import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodIncludeSchema } from '../inputTypeSchemas/PeriodIncludeSchema';
import { PeriodSelectSchema } from '../inputTypeSchemas/PeriodSelectSchema';

export const PeriodArgsSchema: z.ZodType<Prisma.PeriodDefaultArgs> = z
  .object({
    select: z.lazy(() => PeriodSelectSchema).optional(),
    include: z.lazy(() => PeriodIncludeSchema).optional(),
  })
  .strict();

export default PeriodArgsSchema;

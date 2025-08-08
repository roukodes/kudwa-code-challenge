import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCountOutputTypeSelectSchema } from './PeriodCountOutputTypeSelectSchema';

export const PeriodCountOutputTypeArgsSchema: z.ZodType<Prisma.PeriodCountOutputTypeDefaultArgs> = z
  .object({
    select: z.lazy(() => PeriodCountOutputTypeSelectSchema).nullish(),
  })
  .strict();

export default PeriodCountOutputTypeSelectSchema;

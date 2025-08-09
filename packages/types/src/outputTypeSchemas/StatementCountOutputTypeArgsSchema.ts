import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCountOutputTypeSelectSchema } from './StatementCountOutputTypeSelectSchema';

export const StatementCountOutputTypeArgsSchema: z.ZodType<Prisma.StatementCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => StatementCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default StatementCountOutputTypeSelectSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCountOutputTypeSelectSchema } from './StatementLineItemCountOutputTypeSelectSchema';

export const StatementLineItemCountOutputTypeArgsSchema: z.ZodType<Prisma.StatementLineItemCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => StatementLineItemCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default StatementLineItemCountOutputTypeSelectSchema;

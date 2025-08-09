import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemIncludeSchema } from '../inputTypeSchemas/StatementLineItemIncludeSchema';
import { StatementLineItemSelectSchema } from '../inputTypeSchemas/StatementLineItemSelectSchema';

export const StatementLineItemArgsSchema: z.ZodType<Prisma.StatementLineItemDefaultArgs> = z
  .object({
    select: z.lazy(() => StatementLineItemSelectSchema).optional(),
    include: z.lazy(() => StatementLineItemIncludeSchema).optional(),
  })
  .strict();

export default StatementLineItemArgsSchema;

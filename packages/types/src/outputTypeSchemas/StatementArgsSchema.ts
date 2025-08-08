import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementIncludeSchema } from '../inputTypeSchemas/StatementIncludeSchema';
import { StatementSelectSchema } from '../inputTypeSchemas/StatementSelectSchema';

export const StatementArgsSchema: z.ZodType<Prisma.StatementDefaultArgs> = z
  .object({
    select: z.lazy(() => StatementSelectSchema).optional(),
    include: z.lazy(() => StatementIncludeSchema).optional(),
  })
  .strict();

export default StatementArgsSchema;

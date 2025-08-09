import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryIncludeSchema } from '../inputTypeSchemas/StatementCategoryIncludeSchema';
import { StatementCategorySelectSchema } from '../inputTypeSchemas/StatementCategorySelectSchema';

export const StatementCategoryArgsSchema: z.ZodType<Prisma.StatementCategoryDefaultArgs> = z
  .object({
    select: z.lazy(() => StatementCategorySelectSchema).optional(),
    include: z.lazy(() => StatementCategoryIncludeSchema).optional(),
  })
  .strict();

export default StatementCategoryArgsSchema;

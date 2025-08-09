import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementWhereInputSchema } from './StatementWhereInputSchema';

export const StatementListRelationFilterSchema: z.ZodType<Prisma.StatementListRelationFilter> = z
  .object({
    every: z.lazy(() => StatementWhereInputSchema).optional(),
    some: z.lazy(() => StatementWhereInputSchema).optional(),
    none: z.lazy(() => StatementWhereInputSchema).optional(),
  })
  .strict();

export default StatementListRelationFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryWhereInputSchema } from './StatementCategoryWhereInputSchema';

export const StatementCategoryListRelationFilterSchema: z.ZodType<Prisma.StatementCategoryListRelationFilter> =
  z
    .object({
      every: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
      some: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
      none: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
    })
    .strict();

export default StatementCategoryListRelationFilterSchema;

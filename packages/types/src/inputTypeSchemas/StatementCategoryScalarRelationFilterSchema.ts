import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryWhereInputSchema } from './StatementCategoryWhereInputSchema';

export const StatementCategoryScalarRelationFilterSchema: z.ZodType<Prisma.StatementCategoryScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
      isNot: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
    })
    .strict();

export default StatementCategoryScalarRelationFilterSchema;

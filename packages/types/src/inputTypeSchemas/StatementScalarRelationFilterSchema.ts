import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementWhereInputSchema } from './StatementWhereInputSchema';

export const StatementScalarRelationFilterSchema: z.ZodType<Prisma.StatementScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => StatementWhereInputSchema).optional(),
      isNot: z.lazy(() => StatementWhereInputSchema).optional(),
    })
    .strict();

export default StatementScalarRelationFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemScalarRelationFilterSchema: z.ZodType<Prisma.StatementLineItemScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
      isNot: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
    })
    .strict();

export default StatementLineItemScalarRelationFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemListRelationFilterSchema: z.ZodType<Prisma.StatementLineItemListRelationFilter> =
  z
    .object({
      every: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
      some: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
      none: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
    })
    .strict();

export default StatementLineItemListRelationFilterSchema;

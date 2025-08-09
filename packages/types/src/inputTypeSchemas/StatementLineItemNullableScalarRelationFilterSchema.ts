import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemNullableScalarRelationFilterSchema: z.ZodType<Prisma.StatementLineItemNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => StatementLineItemWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => StatementLineItemWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default StatementLineItemNullableScalarRelationFilterSchema;

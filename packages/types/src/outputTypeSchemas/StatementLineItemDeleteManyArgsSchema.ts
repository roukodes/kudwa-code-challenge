import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemWhereInputSchema } from '../inputTypeSchemas/StatementLineItemWhereInputSchema';

export const StatementLineItemDeleteManyArgsSchema: z.ZodType<Prisma.StatementLineItemDeleteManyArgs> =
  z
    .object({
      where: StatementLineItemWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default StatementLineItemDeleteManyArgsSchema;

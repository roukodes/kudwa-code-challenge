import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StatementLineItemUncheckedUpdateManyInputSchema';
import { StatementLineItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/StatementLineItemUpdateManyMutationInputSchema';
import { StatementLineItemWhereInputSchema } from '../inputTypeSchemas/StatementLineItemWhereInputSchema';

export const StatementLineItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StatementLineItemUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        StatementLineItemUpdateManyMutationInputSchema,
        StatementLineItemUncheckedUpdateManyInputSchema,
      ]),
      where: StatementLineItemWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default StatementLineItemUpdateManyAndReturnArgsSchema;

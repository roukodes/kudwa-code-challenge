import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StatementUncheckedUpdateManyInputSchema';
import { StatementUpdateManyMutationInputSchema } from '../inputTypeSchemas/StatementUpdateManyMutationInputSchema';
import { StatementWhereInputSchema } from '../inputTypeSchemas/StatementWhereInputSchema';

export const StatementUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StatementUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        StatementUpdateManyMutationInputSchema,
        StatementUncheckedUpdateManyInputSchema,
      ]),
      where: StatementWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default StatementUpdateManyAndReturnArgsSchema;

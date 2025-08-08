import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PeriodUncheckedUpdateManyInputSchema';
import { PeriodUpdateManyMutationInputSchema } from '../inputTypeSchemas/PeriodUpdateManyMutationInputSchema';
import { PeriodWhereInputSchema } from '../inputTypeSchemas/PeriodWhereInputSchema';

export const PeriodUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PeriodUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([PeriodUpdateManyMutationInputSchema, PeriodUncheckedUpdateManyInputSchema]),
      where: PeriodWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default PeriodUpdateManyAndReturnArgsSchema;

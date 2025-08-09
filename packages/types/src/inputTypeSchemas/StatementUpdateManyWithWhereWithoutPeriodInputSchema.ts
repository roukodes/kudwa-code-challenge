import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementScalarWhereInputSchema } from './StatementScalarWhereInputSchema';
import { StatementUncheckedUpdateManyWithoutPeriodInputSchema } from './StatementUncheckedUpdateManyWithoutPeriodInputSchema';
import { StatementUpdateManyMutationInputSchema } from './StatementUpdateManyMutationInputSchema';

export const StatementUpdateManyWithWhereWithoutPeriodInputSchema: z.ZodType<Prisma.StatementUpdateManyWithWhereWithoutPeriodInput> =
  z
    .object({
      where: z.lazy(() => StatementScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => StatementUpdateManyMutationInputSchema),
        z.lazy(() => StatementUncheckedUpdateManyWithoutPeriodInputSchema),
      ]),
    })
    .strict();

export default StatementUpdateManyWithWhereWithoutPeriodInputSchema;

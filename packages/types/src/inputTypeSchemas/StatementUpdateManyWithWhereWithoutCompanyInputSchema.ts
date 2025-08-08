import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementScalarWhereInputSchema } from './StatementScalarWhereInputSchema';
import { StatementUncheckedUpdateManyWithoutCompanyInputSchema } from './StatementUncheckedUpdateManyWithoutCompanyInputSchema';
import { StatementUpdateManyMutationInputSchema } from './StatementUpdateManyMutationInputSchema';

export const StatementUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.StatementUpdateManyWithWhereWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => StatementScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => StatementUpdateManyMutationInputSchema),
        z.lazy(() => StatementUncheckedUpdateManyWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default StatementUpdateManyWithWhereWithoutCompanyInputSchema;

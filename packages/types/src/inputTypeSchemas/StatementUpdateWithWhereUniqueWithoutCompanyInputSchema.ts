import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementUncheckedUpdateWithoutCompanyInputSchema } from './StatementUncheckedUpdateWithoutCompanyInputSchema';
import { StatementUpdateWithoutCompanyInputSchema } from './StatementUpdateWithoutCompanyInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.StatementUpdateWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => StatementUpdateWithoutCompanyInputSchema),
        z.lazy(() => StatementUncheckedUpdateWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default StatementUpdateWithWhereUniqueWithoutCompanyInputSchema;

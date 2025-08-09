import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateWithoutCompanyInputSchema } from './StatementCreateWithoutCompanyInputSchema';
import { StatementUncheckedCreateWithoutCompanyInputSchema } from './StatementUncheckedCreateWithoutCompanyInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.StatementCreateOrConnectWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementCreateWithoutCompanyInputSchema),
        z.lazy(() => StatementUncheckedCreateWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default StatementCreateOrConnectWithoutCompanyInputSchema;

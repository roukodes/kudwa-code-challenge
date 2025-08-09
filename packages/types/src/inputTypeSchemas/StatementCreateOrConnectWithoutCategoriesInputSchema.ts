import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateWithoutCategoriesInputSchema } from './StatementCreateWithoutCategoriesInputSchema';
import { StatementUncheckedCreateWithoutCategoriesInputSchema } from './StatementUncheckedCreateWithoutCategoriesInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.StatementCreateOrConnectWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementCreateWithoutCategoriesInputSchema),
        z.lazy(() => StatementUncheckedCreateWithoutCategoriesInputSchema),
      ]),
    })
    .strict();

export default StatementCreateOrConnectWithoutCategoriesInputSchema;

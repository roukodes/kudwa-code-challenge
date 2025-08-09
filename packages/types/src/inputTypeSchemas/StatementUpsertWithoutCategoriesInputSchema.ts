import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateWithoutCategoriesInputSchema } from './StatementCreateWithoutCategoriesInputSchema';
import { StatementUncheckedCreateWithoutCategoriesInputSchema } from './StatementUncheckedCreateWithoutCategoriesInputSchema';
import { StatementUncheckedUpdateWithoutCategoriesInputSchema } from './StatementUncheckedUpdateWithoutCategoriesInputSchema';
import { StatementUpdateWithoutCategoriesInputSchema } from './StatementUpdateWithoutCategoriesInputSchema';
import { StatementWhereInputSchema } from './StatementWhereInputSchema';

export const StatementUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.StatementUpsertWithoutCategoriesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => StatementUpdateWithoutCategoriesInputSchema),
        z.lazy(() => StatementUncheckedUpdateWithoutCategoriesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementCreateWithoutCategoriesInputSchema),
        z.lazy(() => StatementUncheckedCreateWithoutCategoriesInputSchema),
      ]),
      where: z.lazy(() => StatementWhereInputSchema).optional(),
    })
    .strict();

export default StatementUpsertWithoutCategoriesInputSchema;

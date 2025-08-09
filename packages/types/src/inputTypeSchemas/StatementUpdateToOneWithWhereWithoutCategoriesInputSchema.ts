import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementUncheckedUpdateWithoutCategoriesInputSchema } from './StatementUncheckedUpdateWithoutCategoriesInputSchema';
import { StatementUpdateWithoutCategoriesInputSchema } from './StatementUpdateWithoutCategoriesInputSchema';
import { StatementWhereInputSchema } from './StatementWhereInputSchema';

export const StatementUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.StatementUpdateToOneWithWhereWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => StatementUpdateWithoutCategoriesInputSchema),
        z.lazy(() => StatementUncheckedUpdateWithoutCategoriesInputSchema),
      ]),
    })
    .strict();

export default StatementUpdateToOneWithWhereWithoutCategoriesInputSchema;

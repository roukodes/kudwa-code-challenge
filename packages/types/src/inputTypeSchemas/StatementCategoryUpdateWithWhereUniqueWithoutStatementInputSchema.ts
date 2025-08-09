import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryUncheckedUpdateWithoutStatementInputSchema } from './StatementCategoryUncheckedUpdateWithoutStatementInputSchema';
import { StatementCategoryUpdateWithoutStatementInputSchema } from './StatementCategoryUpdateWithoutStatementInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryUpdateWithWhereUniqueWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryUpdateWithWhereUniqueWithoutStatementInput> =
  z
    .object({
      where: z.lazy(() => StatementCategoryWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => StatementCategoryUpdateWithoutStatementInputSchema),
        z.lazy(() => StatementCategoryUncheckedUpdateWithoutStatementInputSchema),
      ]),
    })
    .strict();

export default StatementCategoryUpdateWithWhereUniqueWithoutStatementInputSchema;

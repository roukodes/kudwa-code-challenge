import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateWithoutStatementInputSchema } from './StatementCategoryCreateWithoutStatementInputSchema';
import { StatementCategoryUncheckedCreateWithoutStatementInputSchema } from './StatementCategoryUncheckedCreateWithoutStatementInputSchema';
import { StatementCategoryUncheckedUpdateWithoutStatementInputSchema } from './StatementCategoryUncheckedUpdateWithoutStatementInputSchema';
import { StatementCategoryUpdateWithoutStatementInputSchema } from './StatementCategoryUpdateWithoutStatementInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryUpsertWithWhereUniqueWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryUpsertWithWhereUniqueWithoutStatementInput> =
  z
    .object({
      where: z.lazy(() => StatementCategoryWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => StatementCategoryUpdateWithoutStatementInputSchema),
        z.lazy(() => StatementCategoryUncheckedUpdateWithoutStatementInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementCategoryCreateWithoutStatementInputSchema),
        z.lazy(() => StatementCategoryUncheckedCreateWithoutStatementInputSchema),
      ]),
    })
    .strict();

export default StatementCategoryUpsertWithWhereUniqueWithoutStatementInputSchema;

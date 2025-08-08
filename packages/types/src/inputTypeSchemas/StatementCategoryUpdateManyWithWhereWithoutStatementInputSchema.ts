import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryScalarWhereInputSchema } from './StatementCategoryScalarWhereInputSchema';
import { StatementCategoryUncheckedUpdateManyWithoutStatementInputSchema } from './StatementCategoryUncheckedUpdateManyWithoutStatementInputSchema';
import { StatementCategoryUpdateManyMutationInputSchema } from './StatementCategoryUpdateManyMutationInputSchema';

export const StatementCategoryUpdateManyWithWhereWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryUpdateManyWithWhereWithoutStatementInput> =
  z
    .object({
      where: z.lazy(() => StatementCategoryScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => StatementCategoryUpdateManyMutationInputSchema),
        z.lazy(() => StatementCategoryUncheckedUpdateManyWithoutStatementInputSchema),
      ]),
    })
    .strict();

export default StatementCategoryUpdateManyWithWhereWithoutStatementInputSchema;

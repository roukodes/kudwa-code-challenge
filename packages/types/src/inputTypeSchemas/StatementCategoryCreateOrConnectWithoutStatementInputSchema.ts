import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateWithoutStatementInputSchema } from './StatementCategoryCreateWithoutStatementInputSchema';
import { StatementCategoryUncheckedCreateWithoutStatementInputSchema } from './StatementCategoryUncheckedCreateWithoutStatementInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryCreateOrConnectWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryCreateOrConnectWithoutStatementInput> =
  z
    .object({
      where: z.lazy(() => StatementCategoryWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementCategoryCreateWithoutStatementInputSchema),
        z.lazy(() => StatementCategoryUncheckedCreateWithoutStatementInputSchema),
      ]),
    })
    .strict();

export default StatementCategoryCreateOrConnectWithoutStatementInputSchema;

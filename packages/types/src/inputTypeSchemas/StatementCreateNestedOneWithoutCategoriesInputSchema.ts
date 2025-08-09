import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateOrConnectWithoutCategoriesInputSchema } from './StatementCreateOrConnectWithoutCategoriesInputSchema';
import { StatementCreateWithoutCategoriesInputSchema } from './StatementCreateWithoutCategoriesInputSchema';
import { StatementUncheckedCreateWithoutCategoriesInputSchema } from './StatementUncheckedCreateWithoutCategoriesInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.StatementCreateNestedOneWithoutCategoriesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementCreateWithoutCategoriesInputSchema),
          z.lazy(() => StatementUncheckedCreateWithoutCategoriesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatementCreateOrConnectWithoutCategoriesInputSchema)
        .optional(),
      connect: z.lazy(() => StatementWhereUniqueInputSchema).optional(),
    })
    .strict();

export default StatementCreateNestedOneWithoutCategoriesInputSchema;

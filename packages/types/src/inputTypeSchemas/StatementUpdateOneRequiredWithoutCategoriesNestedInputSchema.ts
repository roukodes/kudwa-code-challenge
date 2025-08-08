import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateOrConnectWithoutCategoriesInputSchema } from './StatementCreateOrConnectWithoutCategoriesInputSchema';
import { StatementCreateWithoutCategoriesInputSchema } from './StatementCreateWithoutCategoriesInputSchema';
import { StatementUncheckedCreateWithoutCategoriesInputSchema } from './StatementUncheckedCreateWithoutCategoriesInputSchema';
import { StatementUncheckedUpdateWithoutCategoriesInputSchema } from './StatementUncheckedUpdateWithoutCategoriesInputSchema';
import { StatementUpdateToOneWithWhereWithoutCategoriesInputSchema } from './StatementUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { StatementUpdateWithoutCategoriesInputSchema } from './StatementUpdateWithoutCategoriesInputSchema';
import { StatementUpsertWithoutCategoriesInputSchema } from './StatementUpsertWithoutCategoriesInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.StatementUpdateOneRequiredWithoutCategoriesNestedInput> =
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
      upsert: z.lazy(() => StatementUpsertWithoutCategoriesInputSchema).optional(),
      connect: z.lazy(() => StatementWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => StatementUpdateToOneWithWhereWithoutCategoriesInputSchema),
          z.lazy(() => StatementUpdateWithoutCategoriesInputSchema),
          z.lazy(() => StatementUncheckedUpdateWithoutCategoriesInputSchema),
        ])
        .optional(),
    })
    .strict();

export default StatementUpdateOneRequiredWithoutCategoriesNestedInputSchema;

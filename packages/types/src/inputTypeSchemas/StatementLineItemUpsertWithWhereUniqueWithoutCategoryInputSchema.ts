import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutCategoryInputSchema } from './StatementLineItemCreateWithoutCategoryInputSchema';
import { StatementLineItemUncheckedCreateWithoutCategoryInputSchema } from './StatementLineItemUncheckedCreateWithoutCategoryInputSchema';
import { StatementLineItemUncheckedUpdateWithoutCategoryInputSchema } from './StatementLineItemUncheckedUpdateWithoutCategoryInputSchema';
import { StatementLineItemUpdateWithoutCategoryInputSchema } from './StatementLineItemUpdateWithoutCategoryInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutCategoryInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutCategoryInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutCategoryInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutCategoryInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpsertWithWhereUniqueWithoutCategoryInputSchema;

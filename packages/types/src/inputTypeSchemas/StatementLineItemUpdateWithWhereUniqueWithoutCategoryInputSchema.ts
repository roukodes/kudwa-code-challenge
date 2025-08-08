import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedUpdateWithoutCategoryInputSchema } from './StatementLineItemUncheckedUpdateWithoutCategoryInputSchema';
import { StatementLineItemUpdateWithoutCategoryInputSchema } from './StatementLineItemUpdateWithoutCategoryInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutCategoryInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutCategoryInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpdateWithWhereUniqueWithoutCategoryInputSchema;

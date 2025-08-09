import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemScalarWhereInputSchema } from './StatementLineItemScalarWhereInputSchema';
import { StatementLineItemUncheckedUpdateManyWithoutCategoryInputSchema } from './StatementLineItemUncheckedUpdateManyWithoutCategoryInputSchema';
import { StatementLineItemUpdateManyMutationInputSchema } from './StatementLineItemUpdateManyMutationInputSchema';

export const StatementLineItemUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => StatementLineItemUpdateManyMutationInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateManyWithoutCategoryInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpdateManyWithWhereWithoutCategoryInputSchema;

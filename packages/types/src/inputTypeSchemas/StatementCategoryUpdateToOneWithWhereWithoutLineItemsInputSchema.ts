import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema';
import { StatementCategoryUpdateWithoutLineItemsInputSchema } from './StatementCategoryUpdateWithoutLineItemsInputSchema';
import { StatementCategoryWhereInputSchema } from './StatementCategoryWhereInputSchema';

export const StatementCategoryUpdateToOneWithWhereWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryUpdateToOneWithWhereWithoutLineItemsInput> =
  z
    .object({
      where: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => StatementCategoryUpdateWithoutLineItemsInputSchema),
        z.lazy(() => StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema),
      ]),
    })
    .strict();

export default StatementCategoryUpdateToOneWithWhereWithoutLineItemsInputSchema;

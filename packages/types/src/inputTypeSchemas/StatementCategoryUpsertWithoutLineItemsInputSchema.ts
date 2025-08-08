import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateWithoutLineItemsInputSchema } from './StatementCategoryCreateWithoutLineItemsInputSchema';
import { StatementCategoryUncheckedCreateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedCreateWithoutLineItemsInputSchema';
import { StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema';
import { StatementCategoryUpdateWithoutLineItemsInputSchema } from './StatementCategoryUpdateWithoutLineItemsInputSchema';
import { StatementCategoryWhereInputSchema } from './StatementCategoryWhereInputSchema';

export const StatementCategoryUpsertWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryUpsertWithoutLineItemsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => StatementCategoryUpdateWithoutLineItemsInputSchema),
        z.lazy(() => StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementCategoryCreateWithoutLineItemsInputSchema),
        z.lazy(() => StatementCategoryUncheckedCreateWithoutLineItemsInputSchema),
      ]),
      where: z.lazy(() => StatementCategoryWhereInputSchema).optional(),
    })
    .strict();

export default StatementCategoryUpsertWithoutLineItemsInputSchema;

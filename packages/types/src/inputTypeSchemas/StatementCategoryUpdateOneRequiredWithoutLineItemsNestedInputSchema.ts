import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateOrConnectWithoutLineItemsInputSchema } from './StatementCategoryCreateOrConnectWithoutLineItemsInputSchema';
import { StatementCategoryCreateWithoutLineItemsInputSchema } from './StatementCategoryCreateWithoutLineItemsInputSchema';
import { StatementCategoryUncheckedCreateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedCreateWithoutLineItemsInputSchema';
import { StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema';
import { StatementCategoryUpdateToOneWithWhereWithoutLineItemsInputSchema } from './StatementCategoryUpdateToOneWithWhereWithoutLineItemsInputSchema';
import { StatementCategoryUpdateWithoutLineItemsInputSchema } from './StatementCategoryUpdateWithoutLineItemsInputSchema';
import { StatementCategoryUpsertWithoutLineItemsInputSchema } from './StatementCategoryUpsertWithoutLineItemsInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema: z.ZodType<Prisma.StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementCategoryCreateWithoutLineItemsInputSchema),
          z.lazy(() => StatementCategoryUncheckedCreateWithoutLineItemsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatementCategoryCreateOrConnectWithoutLineItemsInputSchema)
        .optional(),
      upsert: z.lazy(() => StatementCategoryUpsertWithoutLineItemsInputSchema).optional(),
      connect: z.lazy(() => StatementCategoryWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => StatementCategoryUpdateToOneWithWhereWithoutLineItemsInputSchema),
          z.lazy(() => StatementCategoryUpdateWithoutLineItemsInputSchema),
          z.lazy(() => StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema;

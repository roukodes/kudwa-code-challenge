import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateOrConnectWithoutLineItemsInputSchema } from './StatementCategoryCreateOrConnectWithoutLineItemsInputSchema';
import { StatementCategoryCreateWithoutLineItemsInputSchema } from './StatementCategoryCreateWithoutLineItemsInputSchema';
import { StatementCategoryUncheckedCreateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedCreateWithoutLineItemsInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryCreateNestedOneWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryCreateNestedOneWithoutLineItemsInput> =
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
      connect: z.lazy(() => StatementCategoryWhereUniqueInputSchema).optional(),
    })
    .strict();

export default StatementCategoryCreateNestedOneWithoutLineItemsInputSchema;

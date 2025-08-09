import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateWithoutLineItemsInputSchema } from './StatementCategoryCreateWithoutLineItemsInputSchema';
import { StatementCategoryUncheckedCreateWithoutLineItemsInputSchema } from './StatementCategoryUncheckedCreateWithoutLineItemsInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryCreateOrConnectWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryCreateOrConnectWithoutLineItemsInput> =
  z
    .object({
      where: z.lazy(() => StatementCategoryWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementCategoryCreateWithoutLineItemsInputSchema),
        z.lazy(() => StatementCategoryUncheckedCreateWithoutLineItemsInputSchema),
      ]),
    })
    .strict();

export default StatementCategoryCreateOrConnectWithoutLineItemsInputSchema;

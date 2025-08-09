import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutCategoryInputSchema } from './StatementLineItemCreateWithoutCategoryInputSchema';
import { StatementLineItemUncheckedCreateWithoutCategoryInputSchema } from './StatementLineItemUncheckedCreateWithoutCategoryInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutCategoryInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutCategoryInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemCreateOrConnectWithoutCategoryInputSchema;

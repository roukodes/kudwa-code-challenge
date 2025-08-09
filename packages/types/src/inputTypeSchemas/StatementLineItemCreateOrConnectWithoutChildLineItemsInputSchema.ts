import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutChildLineItemsInputSchema } from './StatementLineItemCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemCreateOrConnectWithoutChildLineItemsInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutChildLineItemsInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema;

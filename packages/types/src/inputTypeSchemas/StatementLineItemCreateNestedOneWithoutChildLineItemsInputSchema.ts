import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema } from './StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema';
import { StatementLineItemCreateWithoutChildLineItemsInputSchema } from './StatementLineItemCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemCreateNestedOneWithoutChildLineItemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementLineItemCreateWithoutChildLineItemsInputSchema),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema)
        .optional(),
      connect: z.lazy(() => StatementLineItemWhereUniqueInputSchema).optional(),
    })
    .strict();

export default StatementLineItemCreateNestedOneWithoutChildLineItemsInputSchema;

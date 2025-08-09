import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema } from './StatementLineItemCreateOrConnectWithoutChildLineItemsInputSchema';
import { StatementLineItemCreateWithoutChildLineItemsInputSchema } from './StatementLineItemCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema';
import { StatementLineItemUpdateToOneWithWhereWithoutChildLineItemsInputSchema } from './StatementLineItemUpdateToOneWithWhereWithoutChildLineItemsInputSchema';
import { StatementLineItemUpdateWithoutChildLineItemsInputSchema } from './StatementLineItemUpdateWithoutChildLineItemsInputSchema';
import { StatementLineItemUpsertWithoutChildLineItemsInputSchema } from './StatementLineItemUpsertWithoutChildLineItemsInputSchema';
import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema: z.ZodType<Prisma.StatementLineItemUpdateOneWithoutChildLineItemsNestedInput> =
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
      upsert: z.lazy(() => StatementLineItemUpsertWithoutChildLineItemsInputSchema).optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => StatementLineItemWhereInputSchema)])
        .optional(),
      delete: z.union([z.boolean(), z.lazy(() => StatementLineItemWhereInputSchema)]).optional(),
      connect: z.lazy(() => StatementLineItemWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => StatementLineItemUpdateToOneWithWhereWithoutChildLineItemsInputSchema),
          z.lazy(() => StatementLineItemUpdateWithoutChildLineItemsInputSchema),
          z.lazy(() => StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema;

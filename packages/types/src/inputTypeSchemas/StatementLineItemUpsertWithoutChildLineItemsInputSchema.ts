import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutChildLineItemsInputSchema } from './StatementLineItemCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema';
import { StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema';
import { StatementLineItemUpdateWithoutChildLineItemsInputSchema } from './StatementLineItemUpdateWithoutChildLineItemsInputSchema';
import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemUpsertWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemUpsertWithoutChildLineItemsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutChildLineItemsInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutChildLineItemsInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema),
      ]),
      where: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
    })
    .strict();

export default StatementLineItemUpsertWithoutChildLineItemsInputSchema;

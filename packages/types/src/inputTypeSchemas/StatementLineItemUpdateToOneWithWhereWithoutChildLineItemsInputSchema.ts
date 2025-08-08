import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema } from './StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema';
import { StatementLineItemUpdateWithoutChildLineItemsInputSchema } from './StatementLineItemUpdateWithoutChildLineItemsInputSchema';
import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemUpdateToOneWithWhereWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemUpdateToOneWithWhereWithoutChildLineItemsInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutChildLineItemsInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutChildLineItemsInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpdateToOneWithWhereWithoutChildLineItemsInputSchema;

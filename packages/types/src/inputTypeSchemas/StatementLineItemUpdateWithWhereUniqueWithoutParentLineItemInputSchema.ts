import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedUpdateWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedUpdateWithoutParentLineItemInputSchema';
import { StatementLineItemUpdateWithoutParentLineItemInputSchema } from './StatementLineItemUpdateWithoutParentLineItemInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutParentLineItemInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutParentLineItemInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemScalarWhereInputSchema } from './StatementLineItemScalarWhereInputSchema';
import { StatementLineItemUncheckedUpdateManyWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedUpdateManyWithoutParentLineItemInputSchema';
import { StatementLineItemUpdateManyMutationInputSchema } from './StatementLineItemUpdateManyMutationInputSchema';

export const StatementLineItemUpdateManyWithWhereWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemUpdateManyWithWhereWithoutParentLineItemInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => StatementLineItemUpdateManyMutationInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateManyWithoutParentLineItemInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpdateManyWithWhereWithoutParentLineItemInputSchema;

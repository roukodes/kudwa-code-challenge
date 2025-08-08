import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutParentLineItemInputSchema } from './StatementLineItemCreateWithoutParentLineItemInputSchema';
import { StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemCreateOrConnectWithoutParentLineItemInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutParentLineItemInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutParentLineItemInputSchema } from './StatementLineItemCreateWithoutParentLineItemInputSchema';
import { StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema';
import { StatementLineItemUncheckedUpdateWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedUpdateWithoutParentLineItemInputSchema';
import { StatementLineItemUpdateWithoutParentLineItemInputSchema } from './StatementLineItemUpdateWithoutParentLineItemInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutParentLineItemInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutParentLineItemInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutParentLineItemInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInputSchema;

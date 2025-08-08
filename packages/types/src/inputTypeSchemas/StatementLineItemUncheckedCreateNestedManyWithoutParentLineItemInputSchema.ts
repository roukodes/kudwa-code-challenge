import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyParentLineItemInputEnvelopeSchema } from './StatementLineItemCreateManyParentLineItemInputEnvelopeSchema';
import { StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema } from './StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema';
import { StatementLineItemCreateWithoutParentLineItemInputSchema } from './StatementLineItemCreateWithoutParentLineItemInputSchema';
import { StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementLineItemCreateWithoutParentLineItemInputSchema),
          z.lazy(() => StatementLineItemCreateWithoutParentLineItemInputSchema).array(),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema),
          z.lazy(() => StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StatementLineItemCreateManyParentLineItemInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StatementLineItemWhereUniqueInputSchema),
          z.lazy(() => StatementLineItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema;

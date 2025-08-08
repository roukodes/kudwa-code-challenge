import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyParentLineItemInputEnvelopeSchema } from './StatementLineItemCreateManyParentLineItemInputEnvelopeSchema';
import { StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema } from './StatementLineItemCreateOrConnectWithoutParentLineItemInputSchema';
import { StatementLineItemCreateWithoutParentLineItemInputSchema } from './StatementLineItemCreateWithoutParentLineItemInputSchema';
import { StatementLineItemScalarWhereInputSchema } from './StatementLineItemScalarWhereInputSchema';
import { StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateWithoutParentLineItemInputSchema';
import { StatementLineItemUpdateManyWithWhereWithoutParentLineItemInputSchema } from './StatementLineItemUpdateManyWithWhereWithoutParentLineItemInputSchema';
import { StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInputSchema } from './StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInputSchema';
import { StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInputSchema } from './StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUncheckedUpdateManyWithoutParentLineItemNestedInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedUpdateManyWithoutParentLineItemNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInputSchema),
          z
            .lazy(() => StatementLineItemUpsertWithWhereUniqueWithoutParentLineItemInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StatementLineItemCreateManyParentLineItemInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StatementLineItemWhereUniqueInputSchema),
          z.lazy(() => StatementLineItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StatementLineItemWhereUniqueInputSchema),
          z.lazy(() => StatementLineItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StatementLineItemWhereUniqueInputSchema),
          z.lazy(() => StatementLineItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StatementLineItemWhereUniqueInputSchema),
          z.lazy(() => StatementLineItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInputSchema),
          z
            .lazy(() => StatementLineItemUpdateWithWhereUniqueWithoutParentLineItemInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StatementLineItemUpdateManyWithWhereWithoutParentLineItemInputSchema),
          z
            .lazy(() => StatementLineItemUpdateManyWithWhereWithoutParentLineItemInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StatementLineItemScalarWhereInputSchema),
          z.lazy(() => StatementLineItemScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedUpdateManyWithoutParentLineItemNestedInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyCategoryInputEnvelopeSchema } from './StatementLineItemCreateManyCategoryInputEnvelopeSchema';
import { StatementLineItemCreateOrConnectWithoutCategoryInputSchema } from './StatementLineItemCreateOrConnectWithoutCategoryInputSchema';
import { StatementLineItemCreateWithoutCategoryInputSchema } from './StatementLineItemCreateWithoutCategoryInputSchema';
import { StatementLineItemScalarWhereInputSchema } from './StatementLineItemScalarWhereInputSchema';
import { StatementLineItemUncheckedCreateWithoutCategoryInputSchema } from './StatementLineItemUncheckedCreateWithoutCategoryInputSchema';
import { StatementLineItemUpdateManyWithWhereWithoutCategoryInputSchema } from './StatementLineItemUpdateManyWithWhereWithoutCategoryInputSchema';
import { StatementLineItemUpdateWithWhereUniqueWithoutCategoryInputSchema } from './StatementLineItemUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { StatementLineItemUpsertWithWhereUniqueWithoutCategoryInputSchema } from './StatementLineItemUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedUpdateManyWithoutCategoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementLineItemCreateWithoutCategoryInputSchema),
          z.lazy(() => StatementLineItemCreateWithoutCategoryInputSchema).array(),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutCategoryInputSchema),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutCategoryInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StatementLineItemCreateOrConnectWithoutCategoryInputSchema),
          z.lazy(() => StatementLineItemCreateOrConnectWithoutCategoryInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => StatementLineItemUpsertWithWhereUniqueWithoutCategoryInputSchema),
          z.lazy(() => StatementLineItemUpsertWithWhereUniqueWithoutCategoryInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => StatementLineItemCreateManyCategoryInputEnvelopeSchema).optional(),
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
          z.lazy(() => StatementLineItemUpdateWithWhereUniqueWithoutCategoryInputSchema),
          z.lazy(() => StatementLineItemUpdateWithWhereUniqueWithoutCategoryInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StatementLineItemUpdateManyWithWhereWithoutCategoryInputSchema),
          z.lazy(() => StatementLineItemUpdateManyWithWhereWithoutCategoryInputSchema).array(),
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

export default StatementLineItemUncheckedUpdateManyWithoutCategoryNestedInputSchema;

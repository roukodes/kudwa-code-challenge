import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateManyCategoryInputEnvelopeSchema } from './StatementLineItemCreateManyCategoryInputEnvelopeSchema';
import { StatementLineItemCreateOrConnectWithoutCategoryInputSchema } from './StatementLineItemCreateOrConnectWithoutCategoryInputSchema';
import { StatementLineItemCreateWithoutCategoryInputSchema } from './StatementLineItemCreateWithoutCategoryInputSchema';
import { StatementLineItemUncheckedCreateWithoutCategoryInputSchema } from './StatementLineItemUncheckedCreateWithoutCategoryInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemCreateNestedManyWithoutCategoryInput> =
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
      createMany: z.lazy(() => StatementLineItemCreateManyCategoryInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => StatementLineItemWhereUniqueInputSchema),
          z.lazy(() => StatementLineItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementLineItemCreateNestedManyWithoutCategoryInputSchema;

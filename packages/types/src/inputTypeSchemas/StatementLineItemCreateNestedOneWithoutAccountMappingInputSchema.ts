import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema } from './StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema';
import { StatementLineItemCreateWithoutAccountMappingInputSchema } from './StatementLineItemCreateWithoutAccountMappingInputSchema';
import { StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema: z.ZodType<Prisma.StatementLineItemCreateNestedOneWithoutAccountMappingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementLineItemCreateWithoutAccountMappingInputSchema),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema)
        .optional(),
      connect: z.lazy(() => StatementLineItemWhereUniqueInputSchema).optional(),
    })
    .strict();

export default StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema;

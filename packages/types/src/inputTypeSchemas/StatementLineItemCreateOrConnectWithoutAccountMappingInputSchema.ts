import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutAccountMappingInputSchema } from './StatementLineItemCreateWithoutAccountMappingInputSchema';
import { StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema: z.ZodType<Prisma.StatementLineItemCreateOrConnectWithoutAccountMappingInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutAccountMappingInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema;

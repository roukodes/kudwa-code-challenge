import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateWithoutStatementLineItemInputSchema } from './AccountMappingCreateWithoutStatementLineItemInputSchema';
import { AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingCreateOrConnectWithoutStatementLineItemInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AccountMappingCreateWithoutStatementLineItemInputSchema),
        z.lazy(() => AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema),
      ]),
    })
    .strict();

export default AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema;

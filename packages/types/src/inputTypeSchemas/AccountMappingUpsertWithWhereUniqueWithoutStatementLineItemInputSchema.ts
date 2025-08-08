import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateWithoutStatementLineItemInputSchema } from './AccountMappingCreateWithoutStatementLineItemInputSchema';
import { AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema';
import { AccountMappingUncheckedUpdateWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedUpdateWithoutStatementLineItemInputSchema';
import { AccountMappingUpdateWithoutStatementLineItemInputSchema } from './AccountMappingUpdateWithoutStatementLineItemInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => AccountMappingUpdateWithoutStatementLineItemInputSchema),
        z.lazy(() => AccountMappingUncheckedUpdateWithoutStatementLineItemInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountMappingCreateWithoutStatementLineItemInputSchema),
        z.lazy(() => AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema),
      ]),
    })
    .strict();

export default AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInputSchema;

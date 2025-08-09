import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUncheckedUpdateWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedUpdateWithoutStatementLineItemInputSchema';
import { AccountMappingUpdateWithoutStatementLineItemInputSchema } from './AccountMappingUpdateWithoutStatementLineItemInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AccountMappingUpdateWithoutStatementLineItemInputSchema),
        z.lazy(() => AccountMappingUncheckedUpdateWithoutStatementLineItemInputSchema),
      ]),
    })
    .strict();

export default AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInputSchema;

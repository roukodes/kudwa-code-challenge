import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingScalarWhereInputSchema } from './AccountMappingScalarWhereInputSchema';
import { AccountMappingUncheckedUpdateManyWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedUpdateManyWithoutStatementLineItemInputSchema';
import { AccountMappingUpdateManyMutationInputSchema } from './AccountMappingUpdateManyMutationInputSchema';

export const AccountMappingUpdateManyWithWhereWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingUpdateManyWithWhereWithoutStatementLineItemInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => AccountMappingUpdateManyMutationInputSchema),
        z.lazy(() => AccountMappingUncheckedUpdateManyWithoutStatementLineItemInputSchema),
      ]),
    })
    .strict();

export default AccountMappingUpdateManyWithWhereWithoutStatementLineItemInputSchema;

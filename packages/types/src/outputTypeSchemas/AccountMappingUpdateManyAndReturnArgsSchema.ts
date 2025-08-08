import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AccountMappingUncheckedUpdateManyInputSchema';
import { AccountMappingUpdateManyMutationInputSchema } from '../inputTypeSchemas/AccountMappingUpdateManyMutationInputSchema';
import { AccountMappingWhereInputSchema } from '../inputTypeSchemas/AccountMappingWhereInputSchema';

export const AccountMappingUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountMappingUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        AccountMappingUpdateManyMutationInputSchema,
        AccountMappingUncheckedUpdateManyInputSchema,
      ]),
      where: AccountMappingWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default AccountMappingUpdateManyAndReturnArgsSchema;

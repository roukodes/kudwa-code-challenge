import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingWhereInputSchema } from '../inputTypeSchemas/AccountMappingWhereInputSchema';

export const AccountMappingDeleteManyArgsSchema: z.ZodType<Prisma.AccountMappingDeleteManyArgs> = z
  .object({
    where: AccountMappingWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export default AccountMappingDeleteManyArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingIncludeSchema } from '../inputTypeSchemas/AccountMappingIncludeSchema';
import { AccountMappingSelectSchema } from '../inputTypeSchemas/AccountMappingSelectSchema';

export const AccountMappingArgsSchema: z.ZodType<Prisma.AccountMappingDefaultArgs> = z
  .object({
    select: z.lazy(() => AccountMappingSelectSchema).optional(),
    include: z.lazy(() => AccountMappingIncludeSchema).optional(),
  })
  .strict();

export default AccountMappingArgsSchema;

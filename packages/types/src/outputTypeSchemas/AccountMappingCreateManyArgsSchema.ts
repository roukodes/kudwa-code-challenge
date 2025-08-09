import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyInputSchema } from '../inputTypeSchemas/AccountMappingCreateManyInputSchema';

export const AccountMappingCreateManyArgsSchema: z.ZodType<Prisma.AccountMappingCreateManyArgs> = z
  .object({
    data: z.union([
      AccountMappingCreateManyInputSchema,
      AccountMappingCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export default AccountMappingCreateManyArgsSchema;

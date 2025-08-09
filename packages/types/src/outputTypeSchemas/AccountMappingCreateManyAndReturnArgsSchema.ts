import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyInputSchema } from '../inputTypeSchemas/AccountMappingCreateManyInputSchema';

export const AccountMappingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountMappingCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        AccountMappingCreateManyInputSchema,
        AccountMappingCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default AccountMappingCreateManyAndReturnArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AccountMappingUncheckedCreateInputSchema: z.ZodType<Prisma.AccountMappingUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      statementLineItemId: z.number().int(),
      reportAccountId: z.number().int(),
      notes: z.string().optional().nullable(),
    })
    .strict();

export default AccountMappingUncheckedCreateInputSchema;

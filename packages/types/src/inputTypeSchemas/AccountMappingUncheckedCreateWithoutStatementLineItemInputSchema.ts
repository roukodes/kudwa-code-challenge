import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingUncheckedCreateWithoutStatementLineItemInput> =
  z
    .object({
      id: z.number().int().optional(),
      reportAccountId: z.number().int(),
      notes: z.string().optional().nullable(),
    })
    .strict();

export default AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema;

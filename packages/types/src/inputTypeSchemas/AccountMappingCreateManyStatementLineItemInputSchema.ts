import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AccountMappingCreateManyStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingCreateManyStatementLineItemInput> =
  z
    .object({
      id: z.number().int().optional(),
      reportAccountId: z.number().int(),
      notes: z.string().optional().nullable(),
    })
    .strict();

export default AccountMappingCreateManyStatementLineItemInputSchema;

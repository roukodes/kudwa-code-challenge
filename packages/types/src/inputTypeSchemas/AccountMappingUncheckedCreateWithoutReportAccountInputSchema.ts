import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AccountMappingUncheckedCreateWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingUncheckedCreateWithoutReportAccountInput> =
  z
    .object({
      id: z.number().int().optional(),
      statementLineItemId: z.number().int(),
      notes: z.string().optional().nullable(),
    })
    .strict();

export default AccountMappingUncheckedCreateWithoutReportAccountInputSchema;

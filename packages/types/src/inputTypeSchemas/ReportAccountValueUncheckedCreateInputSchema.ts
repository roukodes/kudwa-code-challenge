import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportAccountValueUncheckedCreateInputSchema: z.ZodType<Prisma.ReportAccountValueUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      accountId: z.number().int(),
      periodId: z.number().int(),
      amount: z.number().optional().nullable(),
    })
    .strict();

export default ReportAccountValueUncheckedCreateInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportAccountValueUncheckedCreateWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueUncheckedCreateWithoutPeriodInput> =
  z
    .object({
      id: z.number().int().optional(),
      accountId: z.number().int(),
      amount: z.number().optional().nullable(),
    })
    .strict();

export default ReportAccountValueUncheckedCreateWithoutPeriodInputSchema;

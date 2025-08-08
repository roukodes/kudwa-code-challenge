import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportAccountValueCreateManyPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueCreateManyPeriodInput> =
  z
    .object({
      id: z.number().int().optional(),
      accountId: z.number().int(),
      amount: z.number().optional().nullable(),
    })
    .strict();

export default ReportAccountValueCreateManyPeriodInputSchema;

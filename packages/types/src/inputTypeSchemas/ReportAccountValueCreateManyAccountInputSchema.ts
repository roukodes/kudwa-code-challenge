import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportAccountValueCreateManyAccountInputSchema: z.ZodType<Prisma.ReportAccountValueCreateManyAccountInput> =
  z
    .object({
      id: z.number().int().optional(),
      periodId: z.number().int(),
      amount: z.number().optional().nullable(),
    })
    .strict();

export default ReportAccountValueCreateManyAccountInputSchema;

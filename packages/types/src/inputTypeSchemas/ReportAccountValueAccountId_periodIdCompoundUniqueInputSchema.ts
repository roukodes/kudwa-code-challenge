import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema: z.ZodType<Prisma.ReportAccountValueAccountId_periodIdCompoundUniqueInput> =
  z
    .object({
      accountId: z.number(),
      periodId: z.number(),
    })
    .strict();

export default ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema;

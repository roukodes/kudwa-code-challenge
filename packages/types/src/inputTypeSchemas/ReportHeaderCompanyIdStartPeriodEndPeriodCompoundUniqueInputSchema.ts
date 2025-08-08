import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportHeaderCompanyIdStartPeriodEndPeriodCompoundUniqueInputSchema: z.ZodType<Prisma.ReportHeaderCompanyIdStartPeriodEndPeriodCompoundUniqueInput> =
  z
    .object({
      companyId: z.number(),
      startPeriod: z.coerce.date(),
      endPeriod: z.coerce.date(),
    })
    .strict();

export default ReportHeaderCompanyIdStartPeriodEndPeriodCompoundUniqueInputSchema;

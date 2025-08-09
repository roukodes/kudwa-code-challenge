import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementCompanyIdPeriodIdCompoundUniqueInputSchema: z.ZodType<Prisma.StatementCompanyIdPeriodIdCompoundUniqueInput> =
  z
    .object({
      companyId: z.number(),
      periodId: z.number(),
    })
    .strict();

export default StatementCompanyIdPeriodIdCompoundUniqueInputSchema;

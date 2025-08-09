import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PeriodStartDateEndDateCompoundUniqueInputSchema: z.ZodType<Prisma.PeriodStartDateEndDateCompoundUniqueInput> =
  z
    .object({
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
    })
    .strict();

export default PeriodStartDateEndDateCompoundUniqueInputSchema;

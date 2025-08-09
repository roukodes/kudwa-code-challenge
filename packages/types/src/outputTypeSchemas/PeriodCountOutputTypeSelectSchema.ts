import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PeriodCountOutputTypeSelectSchema: z.ZodType<Prisma.PeriodCountOutputTypeSelect> = z
  .object({
    statements: z.boolean().optional(),
    reportValues: z.boolean().optional(),
  })
  .strict();

export default PeriodCountOutputTypeSelectSchema;

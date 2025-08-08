import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PeriodCreateManyInputSchema: z.ZodType<Prisma.PeriodCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    label: z.string(),
  })
  .strict();

export default PeriodCreateManyInputSchema;

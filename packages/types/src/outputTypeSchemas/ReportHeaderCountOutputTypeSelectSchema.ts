import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportHeaderCountOutputTypeSelectSchema: z.ZodType<Prisma.ReportHeaderCountOutputTypeSelect> =
  z
    .object({
      accounts: z.boolean().optional(),
    })
    .strict();

export default ReportHeaderCountOutputTypeSelectSchema;

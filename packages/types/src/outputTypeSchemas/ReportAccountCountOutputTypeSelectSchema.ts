import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReportAccountCountOutputTypeSelectSchema: z.ZodType<Prisma.ReportAccountCountOutputTypeSelect> =
  z
    .object({
      childAccounts: z.boolean().optional(),
      values: z.boolean().optional(),
    })
    .strict();

export default ReportAccountCountOutputTypeSelectSchema;

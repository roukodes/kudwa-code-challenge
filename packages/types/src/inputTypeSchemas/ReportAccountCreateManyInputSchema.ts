import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';

export const ReportAccountCreateManyInputSchema: z.ZodType<Prisma.ReportAccountCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    reportId: z.number().int(),
    accountName: z.string(),
    parentAccountId: z.number().int().optional().nullable(),
    type: z
      .lazy(() => ReportAccountTypeSchema)
      .optional()
      .nullable(),
  })
  .strict();

export default ReportAccountCreateManyInputSchema;

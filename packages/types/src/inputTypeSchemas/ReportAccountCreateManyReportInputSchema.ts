import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';

export const ReportAccountCreateManyReportInputSchema: z.ZodType<Prisma.ReportAccountCreateManyReportInput> =
  z
    .object({
      id: z.number().int().optional(),
      accountName: z.string(),
      parentAccountId: z.number().int().optional().nullable(),
      type: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountCreateManyReportInputSchema;

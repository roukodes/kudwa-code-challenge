import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';

export const ReportAccountCreateManyParentAccountInputSchema: z.ZodType<Prisma.ReportAccountCreateManyParentAccountInput> =
  z
    .object({
      id: z.number().int().optional(),
      reportId: z.number().int(),
      accountName: z.string(),
      type: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountCreateManyParentAccountInputSchema;

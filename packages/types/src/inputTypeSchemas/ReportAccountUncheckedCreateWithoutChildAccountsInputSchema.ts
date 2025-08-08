import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountValueUncheckedCreateNestedManyWithoutAccountInputSchema } from './ReportAccountValueUncheckedCreateNestedManyWithoutAccountInputSchema';

export const ReportAccountUncheckedCreateWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountUncheckedCreateWithoutChildAccountsInput> =
  z
    .object({
      id: z.number().int().optional(),
      reportId: z.number().int(),
      accountName: z.string(),
      parentAccountId: z.number().int().optional().nullable(),
      type: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
      values: z
        .lazy(() => ReportAccountValueUncheckedCreateNestedManyWithoutAccountInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountUncheckedCreateWithoutChildAccountsInputSchema;

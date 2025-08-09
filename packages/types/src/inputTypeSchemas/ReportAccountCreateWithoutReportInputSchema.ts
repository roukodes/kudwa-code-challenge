import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateNestedManyWithoutParentAccountInputSchema } from './ReportAccountCreateNestedManyWithoutParentAccountInputSchema';
import { ReportAccountCreateNestedOneWithoutChildAccountsInputSchema } from './ReportAccountCreateNestedOneWithoutChildAccountsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountValueCreateNestedManyWithoutAccountInputSchema } from './ReportAccountValueCreateNestedManyWithoutAccountInputSchema';

export const ReportAccountCreateWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountCreateWithoutReportInput> =
  z
    .object({
      accountName: z.string(),
      type: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
      parentAccount: z
        .lazy(() => ReportAccountCreateNestedOneWithoutChildAccountsInputSchema)
        .optional(),
      childAccounts: z
        .lazy(() => ReportAccountCreateNestedManyWithoutParentAccountInputSchema)
        .optional(),
      values: z.lazy(() => ReportAccountValueCreateNestedManyWithoutAccountInputSchema).optional(),
    })
    .strict();

export default ReportAccountCreateWithoutReportInputSchema;

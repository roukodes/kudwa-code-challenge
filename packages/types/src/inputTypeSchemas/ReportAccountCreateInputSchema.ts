import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateNestedManyWithoutReportAccountInputSchema } from './AccountMappingCreateNestedManyWithoutReportAccountInputSchema';
import { ReportAccountCreateNestedManyWithoutParentAccountInputSchema } from './ReportAccountCreateNestedManyWithoutParentAccountInputSchema';
import { ReportAccountCreateNestedOneWithoutChildAccountsInputSchema } from './ReportAccountCreateNestedOneWithoutChildAccountsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountValueCreateNestedManyWithoutAccountInputSchema } from './ReportAccountValueCreateNestedManyWithoutAccountInputSchema';
import { ReportHeaderCreateNestedOneWithoutAccountsInputSchema } from './ReportHeaderCreateNestedOneWithoutAccountsInputSchema';

export const ReportAccountCreateInputSchema: z.ZodType<Prisma.ReportAccountCreateInput> = z
  .object({
    accountName: z.string(),
    type: z
      .lazy(() => ReportAccountTypeSchema)
      .optional()
      .nullable(),
    report: z.lazy(() => ReportHeaderCreateNestedOneWithoutAccountsInputSchema),
    parentAccount: z
      .lazy(() => ReportAccountCreateNestedOneWithoutChildAccountsInputSchema)
      .optional(),
    childAccounts: z
      .lazy(() => ReportAccountCreateNestedManyWithoutParentAccountInputSchema)
      .optional(),
    values: z.lazy(() => ReportAccountValueCreateNestedManyWithoutAccountInputSchema).optional(),
    AccountMapping: z
      .lazy(() => AccountMappingCreateNestedManyWithoutReportAccountInputSchema)
      .optional(),
  })
  .strict();

export default ReportAccountCreateInputSchema;

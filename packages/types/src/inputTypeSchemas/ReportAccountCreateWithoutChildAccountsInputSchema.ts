import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateNestedManyWithoutReportAccountInputSchema } from './AccountMappingCreateNestedManyWithoutReportAccountInputSchema';
import { ReportAccountCreateNestedOneWithoutChildAccountsInputSchema } from './ReportAccountCreateNestedOneWithoutChildAccountsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountValueCreateNestedManyWithoutAccountInputSchema } from './ReportAccountValueCreateNestedManyWithoutAccountInputSchema';
import { ReportHeaderCreateNestedOneWithoutAccountsInputSchema } from './ReportHeaderCreateNestedOneWithoutAccountsInputSchema';

export const ReportAccountCreateWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountCreateWithoutChildAccountsInput> =
  z
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
      values: z.lazy(() => ReportAccountValueCreateNestedManyWithoutAccountInputSchema).optional(),
      AccountMapping: z
        .lazy(() => AccountMappingCreateNestedManyWithoutReportAccountInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountCreateWithoutChildAccountsInputSchema;

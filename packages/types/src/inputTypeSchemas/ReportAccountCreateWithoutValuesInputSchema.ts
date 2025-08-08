import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateNestedManyWithoutParentAccountInputSchema } from './ReportAccountCreateNestedManyWithoutParentAccountInputSchema';
import { ReportAccountCreateNestedOneWithoutChildAccountsInputSchema } from './ReportAccountCreateNestedOneWithoutChildAccountsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportHeaderCreateNestedOneWithoutAccountsInputSchema } from './ReportHeaderCreateNestedOneWithoutAccountsInputSchema';

export const ReportAccountCreateWithoutValuesInputSchema: z.ZodType<Prisma.ReportAccountCreateWithoutValuesInput> =
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
      childAccounts: z
        .lazy(() => ReportAccountCreateNestedManyWithoutParentAccountInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountCreateWithoutValuesInputSchema;

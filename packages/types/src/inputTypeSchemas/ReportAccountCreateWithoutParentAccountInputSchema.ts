import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateNestedManyWithoutParentAccountInputSchema } from './ReportAccountCreateNestedManyWithoutParentAccountInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountValueCreateNestedManyWithoutAccountInputSchema } from './ReportAccountValueCreateNestedManyWithoutAccountInputSchema';
import { ReportHeaderCreateNestedOneWithoutAccountsInputSchema } from './ReportHeaderCreateNestedOneWithoutAccountsInputSchema';

export const ReportAccountCreateWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountCreateWithoutParentAccountInput> =
  z
    .object({
      accountName: z.string(),
      type: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
      report: z.lazy(() => ReportHeaderCreateNestedOneWithoutAccountsInputSchema),
      childAccounts: z
        .lazy(() => ReportAccountCreateNestedManyWithoutParentAccountInputSchema)
        .optional(),
      values: z.lazy(() => ReportAccountValueCreateNestedManyWithoutAccountInputSchema).optional(),
    })
    .strict();

export default ReportAccountCreateWithoutParentAccountInputSchema;

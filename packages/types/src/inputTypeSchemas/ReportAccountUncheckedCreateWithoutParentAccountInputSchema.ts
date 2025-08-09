import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountUncheckedCreateNestedManyWithoutParentAccountInputSchema } from './ReportAccountUncheckedCreateNestedManyWithoutParentAccountInputSchema';
import { ReportAccountValueUncheckedCreateNestedManyWithoutAccountInputSchema } from './ReportAccountValueUncheckedCreateNestedManyWithoutAccountInputSchema';

export const ReportAccountUncheckedCreateWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountUncheckedCreateWithoutParentAccountInput> =
  z
    .object({
      id: z.number().int().optional(),
      reportId: z.number().int(),
      accountName: z.string(),
      type: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
      childAccounts: z
        .lazy(() => ReportAccountUncheckedCreateNestedManyWithoutParentAccountInputSchema)
        .optional(),
      values: z
        .lazy(() => ReportAccountValueUncheckedCreateNestedManyWithoutAccountInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountUncheckedCreateWithoutParentAccountInputSchema;

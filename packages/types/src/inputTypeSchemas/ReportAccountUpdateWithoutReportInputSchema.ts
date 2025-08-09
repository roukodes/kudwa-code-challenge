import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUpdateManyWithoutReportAccountNestedInputSchema } from './AccountMappingUpdateManyWithoutReportAccountNestedInputSchema';
import { NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema } from './NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountUpdateManyWithoutParentAccountNestedInputSchema } from './ReportAccountUpdateManyWithoutParentAccountNestedInputSchema';
import { ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema } from './ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema';
import { ReportAccountValueUpdateManyWithoutAccountNestedInputSchema } from './ReportAccountValueUpdateManyWithoutAccountNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ReportAccountUpdateWithoutReportInputSchema: z.ZodType<Prisma.ReportAccountUpdateWithoutReportInput> =
  z
    .object({
      accountName: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      type: z
        .union([
          z.lazy(() => ReportAccountTypeSchema),
          z.lazy(() => NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      parentAccount: z
        .lazy(() => ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema)
        .optional(),
      childAccounts: z
        .lazy(() => ReportAccountUpdateManyWithoutParentAccountNestedInputSchema)
        .optional(),
      values: z.lazy(() => ReportAccountValueUpdateManyWithoutAccountNestedInputSchema).optional(),
      AccountMapping: z
        .lazy(() => AccountMappingUpdateManyWithoutReportAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountUpdateWithoutReportInputSchema;

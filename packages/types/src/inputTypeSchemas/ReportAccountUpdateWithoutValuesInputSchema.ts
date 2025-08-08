import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUpdateManyWithoutReportAccountNestedInputSchema } from './AccountMappingUpdateManyWithoutReportAccountNestedInputSchema';
import { NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema } from './NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountUpdateManyWithoutParentAccountNestedInputSchema } from './ReportAccountUpdateManyWithoutParentAccountNestedInputSchema';
import { ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema } from './ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema';
import { ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema } from './ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ReportAccountUpdateWithoutValuesInputSchema: z.ZodType<Prisma.ReportAccountUpdateWithoutValuesInput> =
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
      report: z
        .lazy(() => ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema)
        .optional(),
      parentAccount: z
        .lazy(() => ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema)
        .optional(),
      childAccounts: z
        .lazy(() => ReportAccountUpdateManyWithoutParentAccountNestedInputSchema)
        .optional(),
      AccountMapping: z
        .lazy(() => AccountMappingUpdateManyWithoutReportAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountUpdateWithoutValuesInputSchema;

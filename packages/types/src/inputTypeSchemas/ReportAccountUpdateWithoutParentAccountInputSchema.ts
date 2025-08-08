import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUpdateManyWithoutReportAccountNestedInputSchema } from './AccountMappingUpdateManyWithoutReportAccountNestedInputSchema';
import { NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema } from './NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountUpdateManyWithoutParentAccountNestedInputSchema } from './ReportAccountUpdateManyWithoutParentAccountNestedInputSchema';
import { ReportAccountValueUpdateManyWithoutAccountNestedInputSchema } from './ReportAccountValueUpdateManyWithoutAccountNestedInputSchema';
import { ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema } from './ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ReportAccountUpdateWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountUpdateWithoutParentAccountInput> =
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
      childAccounts: z
        .lazy(() => ReportAccountUpdateManyWithoutParentAccountNestedInputSchema)
        .optional(),
      values: z.lazy(() => ReportAccountValueUpdateManyWithoutAccountNestedInputSchema).optional(),
      AccountMapping: z
        .lazy(() => AccountMappingUpdateManyWithoutReportAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountUpdateWithoutParentAccountInputSchema;

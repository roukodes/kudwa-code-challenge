import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema } from './NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema } from './ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema';
import { ReportAccountValueUpdateManyWithoutAccountNestedInputSchema } from './ReportAccountValueUpdateManyWithoutAccountNestedInputSchema';
import { ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema } from './ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ReportAccountUpdateWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountUpdateWithoutChildAccountsInput> =
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
      values: z.lazy(() => ReportAccountValueUpdateManyWithoutAccountNestedInputSchema).optional(),
    })
    .strict();

export default ReportAccountUpdateWithoutChildAccountsInputSchema;

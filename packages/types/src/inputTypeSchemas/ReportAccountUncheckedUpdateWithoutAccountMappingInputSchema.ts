import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema } from './NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountUncheckedUpdateManyWithoutParentAccountNestedInputSchema } from './ReportAccountUncheckedUpdateManyWithoutParentAccountNestedInputSchema';
import { ReportAccountValueUncheckedUpdateManyWithoutAccountNestedInputSchema } from './ReportAccountValueUncheckedUpdateManyWithoutAccountNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema: z.ZodType<Prisma.ReportAccountUncheckedUpdateWithoutAccountMappingInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      reportId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      accountName: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      parentAccountId: z
        .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      type: z
        .union([
          z.lazy(() => ReportAccountTypeSchema),
          z.lazy(() => NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      childAccounts: z
        .lazy(() => ReportAccountUncheckedUpdateManyWithoutParentAccountNestedInputSchema)
        .optional(),
      values: z
        .lazy(() => ReportAccountValueUncheckedUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyUpdateOneRequiredWithoutReportsNestedInputSchema } from './CompanyUpdateOneRequiredWithoutReportsNestedInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ReportAccountUpdateManyWithoutReportNestedInputSchema } from './ReportAccountUpdateManyWithoutReportNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const ReportHeaderUpdateInputSchema: z.ZodType<Prisma.ReportHeaderUpdateInput> = z
  .object({
    reportName: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    basis: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    startPeriod: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    endPeriod: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    currency: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    options: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
      .optional(),
    company: z.lazy(() => CompanyUpdateOneRequiredWithoutReportsNestedInputSchema).optional(),
    accounts: z.lazy(() => ReportAccountUpdateManyWithoutReportNestedInputSchema).optional(),
  })
  .strict();

export default ReportHeaderUpdateInputSchema;

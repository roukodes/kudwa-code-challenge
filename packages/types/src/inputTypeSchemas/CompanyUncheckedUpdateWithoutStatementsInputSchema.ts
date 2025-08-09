import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ReportHeaderUncheckedUpdateManyWithoutCompanyNestedInputSchema } from './ReportHeaderUncheckedUpdateManyWithoutCompanyNestedInputSchema';

export const CompanyUncheckedUpdateWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutStatementsInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      name: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      currency: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      reports: z
        .lazy(() => ReportHeaderUncheckedUpdateManyWithoutCompanyNestedInputSchema)
        .optional(),
    })
    .strict();

export default CompanyUncheckedUpdateWithoutStatementsInputSchema;

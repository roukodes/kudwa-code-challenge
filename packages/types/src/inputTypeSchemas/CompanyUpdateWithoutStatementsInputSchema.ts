import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ReportHeaderUpdateManyWithoutCompanyNestedInputSchema } from './ReportHeaderUpdateManyWithoutCompanyNestedInputSchema';

export const CompanyUpdateWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutStatementsInput> =
  z
    .object({
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
      reports: z.lazy(() => ReportHeaderUpdateManyWithoutCompanyNestedInputSchema).optional(),
    })
    .strict();

export default CompanyUpdateWithoutStatementsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatementUpdateManyWithoutCompanyNestedInputSchema } from './StatementUpdateManyWithoutCompanyNestedInputSchema';

export const CompanyUpdateWithoutReportsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutReportsInput> =
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
      statements: z.lazy(() => StatementUpdateManyWithoutCompanyNestedInputSchema).optional(),
    })
    .strict();

export default CompanyUpdateWithoutReportsInputSchema;

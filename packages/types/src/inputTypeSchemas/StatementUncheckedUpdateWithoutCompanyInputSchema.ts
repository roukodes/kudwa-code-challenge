import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { InputJsonValueSchema } from './InputJsonValueSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { StatementCategoryUncheckedUpdateManyWithoutStatementNestedInputSchema } from './StatementCategoryUncheckedUpdateManyWithoutStatementNestedInputSchema';

export const StatementUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.StatementUncheckedUpdateWithoutCompanyInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      periodId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      rootfiId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      grossProfit: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      operatingProfit: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      netProfit: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      earningsBeforeTaxes: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      taxes: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      customFields: z
        .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
        .optional(),
      createdAt: z
        .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      categories: z
        .lazy(() => StatementCategoryUncheckedUpdateManyWithoutStatementNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementUncheckedUpdateWithoutCompanyInputSchema;

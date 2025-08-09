import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumStatementCategoryTypeFieldUpdateOperationsInputSchema } from './EnumStatementCategoryTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryUncheckedUpdateWithoutLineItemsInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      statementId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      type: z
        .union([
          z.lazy(() => StatementCategoryTypeSchema),
          z.lazy(() => EnumStatementCategoryTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      totalValue: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export default StatementCategoryUncheckedUpdateWithoutLineItemsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumStatementCategoryTypeFieldUpdateOperationsInputSchema } from './EnumStatementCategoryTypeFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './StatementUpdateOneRequiredWithoutCategoriesNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementCategoryUpdateWithoutLineItemsInputSchema: z.ZodType<Prisma.StatementCategoryUpdateWithoutLineItemsInput> =
  z
    .object({
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
      statement: z
        .lazy(() => StatementUpdateOneRequiredWithoutCategoriesNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementCategoryUpdateWithoutLineItemsInputSchema;

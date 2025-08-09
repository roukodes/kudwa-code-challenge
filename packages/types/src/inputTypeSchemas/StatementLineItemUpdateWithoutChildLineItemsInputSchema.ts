import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema } from './StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema';
import { StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema } from './StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementLineItemUpdateWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemUpdateWithoutChildLineItemsInput> =
  z
    .object({
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      accountId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      category: z
        .lazy(() => StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema)
        .optional(),
      parentLineItem: z
        .lazy(() => StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUpdateWithoutChildLineItemsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema } from './StatementCategoryUpdateOneRequiredWithoutLineItemsNestedInputSchema';
import { StatementLineItemUpdateManyWithoutParentLineItemNestedInputSchema } from './StatementLineItemUpdateManyWithoutParentLineItemNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementLineItemUpdateWithoutParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemUpdateWithoutParentLineItemInput> =
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
      childLineItems: z
        .lazy(() => StatementLineItemUpdateManyWithoutParentLineItemNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUpdateWithoutParentLineItemInputSchema;

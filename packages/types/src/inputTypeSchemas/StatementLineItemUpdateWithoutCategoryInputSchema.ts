import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUpdateManyWithoutStatementLineItemNestedInputSchema } from './AccountMappingUpdateManyWithoutStatementLineItemNestedInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatementLineItemUpdateManyWithoutParentLineItemNestedInputSchema } from './StatementLineItemUpdateManyWithoutParentLineItemNestedInputSchema';
import { StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema } from './StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementLineItemUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemUpdateWithoutCategoryInput> =
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
      parentLineItem: z
        .lazy(() => StatementLineItemUpdateOneWithoutChildLineItemsNestedInputSchema)
        .optional(),
      childLineItems: z
        .lazy(() => StatementLineItemUpdateManyWithoutParentLineItemNestedInputSchema)
        .optional(),
      AccountMapping: z
        .lazy(() => AccountMappingUpdateManyWithoutStatementLineItemNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUpdateWithoutCategoryInputSchema;

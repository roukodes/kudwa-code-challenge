import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUncheckedUpdateManyWithoutStatementLineItemNestedInputSchema } from './AccountMappingUncheckedUpdateManyWithoutStatementLineItemNestedInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatementLineItemUncheckedUpdateManyWithoutParentLineItemNestedInputSchema } from './StatementLineItemUncheckedUpdateManyWithoutParentLineItemNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementLineItemUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedUpdateWithoutCategoryInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      parentLineItemId: z
        .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      value: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      accountId: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      childLineItems: z
        .lazy(() => StatementLineItemUncheckedUpdateManyWithoutParentLineItemNestedInputSchema)
        .optional(),
      AccountMapping: z
        .lazy(() => AccountMappingUncheckedUpdateManyWithoutStatementLineItemNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedUpdateWithoutCategoryInputSchema;

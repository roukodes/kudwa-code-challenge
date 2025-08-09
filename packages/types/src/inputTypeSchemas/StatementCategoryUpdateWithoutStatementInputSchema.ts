import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumStatementCategoryTypeFieldUpdateOperationsInputSchema } from './EnumStatementCategoryTypeFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementLineItemUpdateManyWithoutCategoryNestedInputSchema } from './StatementLineItemUpdateManyWithoutCategoryNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const StatementCategoryUpdateWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryUpdateWithoutStatementInput> =
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
      lineItems: z
        .lazy(() => StatementLineItemUpdateManyWithoutCategoryNestedInputSchema)
        .optional(),
    })
    .strict();

export default StatementCategoryUpdateWithoutStatementInputSchema;

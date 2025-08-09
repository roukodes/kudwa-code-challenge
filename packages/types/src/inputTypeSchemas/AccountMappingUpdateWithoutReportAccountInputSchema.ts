import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema } from './StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema';

export const AccountMappingUpdateWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingUpdateWithoutReportAccountInput> =
  z
    .object({
      notes: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      statementLineItem: z
        .lazy(() => StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema)
        .optional(),
    })
    .strict();

export default AccountMappingUpdateWithoutReportAccountInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema } from './ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema';

export const AccountMappingUpdateWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingUpdateWithoutStatementLineItemInput> =
  z
    .object({
      notes: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      reportAccount: z
        .lazy(() => ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema)
        .optional(),
    })
    .strict();

export default AccountMappingUpdateWithoutStatementLineItemInputSchema;

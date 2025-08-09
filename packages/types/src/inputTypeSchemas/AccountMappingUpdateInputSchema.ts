import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema } from './ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema';
import { StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema } from './StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema';

export const AccountMappingUpdateInputSchema: z.ZodType<Prisma.AccountMappingUpdateInput> = z
  .object({
    notes: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
      .optional()
      .nullable(),
    statementLineItem: z
      .lazy(() => StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema)
      .optional(),
    reportAccount: z
      .lazy(() => ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema)
      .optional(),
  })
  .strict();

export default AccountMappingUpdateInputSchema;

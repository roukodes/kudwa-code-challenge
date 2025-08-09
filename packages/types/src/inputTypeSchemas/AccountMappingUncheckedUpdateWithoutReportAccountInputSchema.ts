import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const AccountMappingUncheckedUpdateWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingUncheckedUpdateWithoutReportAccountInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      statementLineItemId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      notes: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export default AccountMappingUncheckedUpdateWithoutReportAccountInputSchema;

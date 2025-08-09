import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';

export const ReportAccountValueUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReportAccountValueUncheckedUpdateManyInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      accountId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      periodId: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      amount: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountValueUncheckedUpdateManyInputSchema;

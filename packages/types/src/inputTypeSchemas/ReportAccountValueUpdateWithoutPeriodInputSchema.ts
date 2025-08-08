import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema } from './ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema';

export const ReportAccountValueUpdateWithoutPeriodInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateWithoutPeriodInput> =
  z
    .object({
      amount: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      account: z
        .lazy(() => ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema)
        .optional(),
    })
    .strict();

export default ReportAccountValueUpdateWithoutPeriodInputSchema;

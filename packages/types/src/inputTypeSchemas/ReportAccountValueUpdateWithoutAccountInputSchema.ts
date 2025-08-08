import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema } from './PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema';

export const ReportAccountValueUpdateWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateWithoutAccountInput> =
  z
    .object({
      amount: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      period: z.lazy(() => PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema).optional(),
    })
    .strict();

export default ReportAccountValueUpdateWithoutAccountInputSchema;

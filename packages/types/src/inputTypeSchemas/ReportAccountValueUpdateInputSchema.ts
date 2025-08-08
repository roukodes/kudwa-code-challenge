import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema } from './PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema';
import { ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema } from './ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema';

export const ReportAccountValueUpdateInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateInput> =
  z
    .object({
      amount: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      account: z
        .lazy(() => ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema)
        .optional(),
      period: z.lazy(() => PeriodUpdateOneRequiredWithoutReportValuesNestedInputSchema).optional(),
    })
    .strict();

export default ReportAccountValueUpdateInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ReportAccountValueUpdateManyWithoutPeriodNestedInputSchema } from './ReportAccountValueUpdateManyWithoutPeriodNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PeriodUpdateWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodUpdateWithoutStatementsInput> =
  z
    .object({
      startDate: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      endDate: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      reportValues: z
        .lazy(() => ReportAccountValueUpdateManyWithoutPeriodNestedInputSchema)
        .optional(),
    })
    .strict();

export default PeriodUpdateWithoutStatementsInputSchema;

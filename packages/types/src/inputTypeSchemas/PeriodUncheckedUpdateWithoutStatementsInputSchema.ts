import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ReportAccountValueUncheckedUpdateManyWithoutPeriodNestedInputSchema } from './ReportAccountValueUncheckedUpdateManyWithoutPeriodNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PeriodUncheckedUpdateWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodUncheckedUpdateWithoutStatementsInput> =
  z
    .object({
      id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
      startDate: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      endDate: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      reportValues: z
        .lazy(() => ReportAccountValueUncheckedUpdateManyWithoutPeriodNestedInputSchema)
        .optional(),
    })
    .strict();

export default PeriodUncheckedUpdateWithoutStatementsInputSchema;

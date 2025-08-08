import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StatementUncheckedUpdateManyWithoutPeriodNestedInputSchema } from './StatementUncheckedUpdateManyWithoutPeriodNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PeriodUncheckedUpdateWithoutReportValuesInputSchema: z.ZodType<Prisma.PeriodUncheckedUpdateWithoutReportValuesInput> =
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
      statements: z
        .lazy(() => StatementUncheckedUpdateManyWithoutPeriodNestedInputSchema)
        .optional(),
    })
    .strict();

export default PeriodUncheckedUpdateWithoutReportValuesInputSchema;

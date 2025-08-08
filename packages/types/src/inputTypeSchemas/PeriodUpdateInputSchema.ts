import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ReportAccountValueUpdateManyWithoutPeriodNestedInputSchema } from './ReportAccountValueUpdateManyWithoutPeriodNestedInputSchema';
import { StatementUpdateManyWithoutPeriodNestedInputSchema } from './StatementUpdateManyWithoutPeriodNestedInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PeriodUpdateInputSchema: z.ZodType<Prisma.PeriodUpdateInput> = z
  .object({
    startDate: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    statements: z.lazy(() => StatementUpdateManyWithoutPeriodNestedInputSchema).optional(),
    reportValues: z
      .lazy(() => ReportAccountValueUpdateManyWithoutPeriodNestedInputSchema)
      .optional(),
  })
  .strict();

export default PeriodUpdateInputSchema;

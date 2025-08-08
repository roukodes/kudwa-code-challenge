import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PeriodUpdateManyMutationInputSchema: z.ZodType<Prisma.PeriodUpdateManyMutationInput> =
  z
    .object({
      startDate: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      endDate: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
        .optional(),
      label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    })
    .strict();

export default PeriodUpdateManyMutationInputSchema;

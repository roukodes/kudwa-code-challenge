import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';

export const ReportAccountValueUpdateManyMutationInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateManyMutationInput> =
  z
    .object({
      amount: z
        .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountValueUpdateManyMutationInputSchema;

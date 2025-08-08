import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';

export const NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumReportAccountTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default NullableEnumReportAccountTypeFieldUpdateOperationsInputSchema;

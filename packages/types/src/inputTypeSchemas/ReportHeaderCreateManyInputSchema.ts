import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';

export const ReportHeaderCreateManyInputSchema: z.ZodType<Prisma.ReportHeaderCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    companyId: z.number().int(),
    reportName: z.string(),
    basis: z.string(),
    startPeriod: z.coerce.date(),
    endPeriod: z.coerce.date(),
    currency: z.string().optional().nullable(),
    options: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
      .optional(),
  })
  .strict();

export default ReportHeaderCreateManyInputSchema;

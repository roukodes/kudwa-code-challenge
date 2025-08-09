import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { ReportAccountCreateNestedManyWithoutReportInputSchema } from './ReportAccountCreateNestedManyWithoutReportInputSchema';

export const ReportHeaderCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderCreateWithoutCompanyInput> =
  z
    .object({
      reportName: z.string(),
      basis: z.string(),
      startPeriod: z.coerce.date(),
      endPeriod: z.coerce.date(),
      currency: z.string().optional().nullable(),
      options: z
        .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
        .optional(),
      accounts: z.lazy(() => ReportAccountCreateNestedManyWithoutReportInputSchema).optional(),
    })
    .strict();

export default ReportHeaderCreateWithoutCompanyInputSchema;

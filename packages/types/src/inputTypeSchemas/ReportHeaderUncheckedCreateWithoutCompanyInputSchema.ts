import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { ReportAccountUncheckedCreateNestedManyWithoutReportInputSchema } from './ReportAccountUncheckedCreateNestedManyWithoutReportInputSchema';

export const ReportHeaderUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderUncheckedCreateWithoutCompanyInput> =
  z
    .object({
      id: z.number().int().optional(),
      reportName: z.string(),
      basis: z.string(),
      startPeriod: z.coerce.date(),
      endPeriod: z.coerce.date(),
      currency: z.string().optional().nullable(),
      options: z
        .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
        .optional(),
      accounts: z
        .lazy(() => ReportAccountUncheckedCreateNestedManyWithoutReportInputSchema)
        .optional(),
    })
    .strict();

export default ReportHeaderUncheckedCreateWithoutCompanyInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateNestedOneWithoutReportsInputSchema } from './CompanyCreateNestedOneWithoutReportsInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { ReportAccountCreateNestedManyWithoutReportInputSchema } from './ReportAccountCreateNestedManyWithoutReportInputSchema';

export const ReportHeaderCreateInputSchema: z.ZodType<Prisma.ReportHeaderCreateInput> = z
  .object({
    reportName: z.string(),
    basis: z.string(),
    startPeriod: z.coerce.date(),
    endPeriod: z.coerce.date(),
    currency: z.string().optional().nullable(),
    options: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema])
      .optional(),
    company: z.lazy(() => CompanyCreateNestedOneWithoutReportsInputSchema),
    accounts: z.lazy(() => ReportAccountCreateNestedManyWithoutReportInputSchema).optional(),
  })
  .strict();

export default ReportHeaderCreateInputSchema;

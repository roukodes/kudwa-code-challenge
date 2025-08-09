import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateNestedOneWithoutReportsInputSchema } from './CompanyCreateNestedOneWithoutReportsInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';

export const ReportHeaderCreateWithoutAccountsInputSchema: z.ZodType<Prisma.ReportHeaderCreateWithoutAccountsInput> =
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
      company: z.lazy(() => CompanyCreateNestedOneWithoutReportsInputSchema),
    })
    .strict();

export default ReportHeaderCreateWithoutAccountsInputSchema;

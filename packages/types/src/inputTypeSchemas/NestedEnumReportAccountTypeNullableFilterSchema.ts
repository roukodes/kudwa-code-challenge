import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';

export const NestedEnumReportAccountTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumReportAccountTypeNullableFilter> =
  z
    .object({
      equals: z
        .lazy(() => ReportAccountTypeSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => ReportAccountTypeSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => ReportAccountTypeSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => ReportAccountTypeSchema),
          z.lazy(() => NestedEnumReportAccountTypeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export default NestedEnumReportAccountTypeNullableFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NestedEnumReportAccountTypeNullableFilterSchema } from './NestedEnumReportAccountTypeNullableFilterSchema';
import { NestedEnumReportAccountTypeNullableWithAggregatesFilterSchema } from './NestedEnumReportAccountTypeNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';

export const EnumReportAccountTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumReportAccountTypeNullableWithAggregatesFilter> =
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
          z.lazy(() => NestedEnumReportAccountTypeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumReportAccountTypeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumReportAccountTypeNullableFilterSchema).optional(),
    })
    .strict();

export default EnumReportAccountTypeNullableWithAggregatesFilterSchema;

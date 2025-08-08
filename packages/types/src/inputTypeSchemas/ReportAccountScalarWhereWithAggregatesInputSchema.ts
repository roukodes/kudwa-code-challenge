import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumReportAccountTypeNullableWithAggregatesFilterSchema } from './EnumReportAccountTypeNullableWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const ReportAccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportAccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ReportAccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ReportAccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ReportAccountScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ReportAccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ReportAccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      reportId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      accountName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      parentAccountId: z
        .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      type: z
        .union([
          z.lazy(() => EnumReportAccountTypeNullableWithAggregatesFilterSchema),
          z.lazy(() => ReportAccountTypeSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountScalarWhereWithAggregatesInputSchema;

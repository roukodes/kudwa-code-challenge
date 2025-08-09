import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const ReportHeaderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportHeaderScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ReportHeaderScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ReportHeaderScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ReportHeaderScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ReportHeaderScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ReportHeaderScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      companyId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      reportName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      basis: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      startPeriod: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      endPeriod: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional(),
      currency: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      options: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
    })
    .strict();

export default ReportHeaderScalarWhereWithAggregatesInputSchema;

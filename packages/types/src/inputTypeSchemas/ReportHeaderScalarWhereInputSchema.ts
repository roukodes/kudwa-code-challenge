import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ReportHeaderScalarWhereInputSchema: z.ZodType<Prisma.ReportHeaderScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReportHeaderScalarWhereInputSchema),
        z.lazy(() => ReportHeaderScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReportHeaderScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReportHeaderScalarWhereInputSchema),
        z.lazy(() => ReportHeaderScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    companyId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    reportName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    basis: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    startPeriod: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    endPeriod: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    currency: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    options: z.lazy(() => JsonNullableFilterSchema).optional(),
  })
  .strict();

export default ReportHeaderScalarWhereInputSchema;

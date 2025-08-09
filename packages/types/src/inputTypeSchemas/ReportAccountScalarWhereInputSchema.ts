import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumReportAccountTypeNullableFilterSchema } from './EnumReportAccountTypeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const ReportAccountScalarWhereInputSchema: z.ZodType<Prisma.ReportAccountScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ReportAccountScalarWhereInputSchema),
          z.lazy(() => ReportAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ReportAccountScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ReportAccountScalarWhereInputSchema),
          z.lazy(() => ReportAccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      reportId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      accountName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      parentAccountId: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      type: z
        .union([
          z.lazy(() => EnumReportAccountTypeNullableFilterSchema),
          z.lazy(() => ReportAccountTypeSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountScalarWhereInputSchema;

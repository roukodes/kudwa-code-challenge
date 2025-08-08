import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { ReportAccountListRelationFilterSchema } from './ReportAccountListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ReportHeaderWhereInputSchema: z.ZodType<Prisma.ReportHeaderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReportHeaderWhereInputSchema),
        z.lazy(() => ReportHeaderWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReportHeaderWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReportHeaderWhereInputSchema),
        z.lazy(() => ReportHeaderWhereInputSchema).array(),
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
    company: z
      .union([
        z.lazy(() => CompanyScalarRelationFilterSchema),
        z.lazy(() => CompanyWhereInputSchema),
      ])
      .optional(),
    accounts: z.lazy(() => ReportAccountListRelationFilterSchema).optional(),
  })
  .strict();

export default ReportHeaderWhereInputSchema;

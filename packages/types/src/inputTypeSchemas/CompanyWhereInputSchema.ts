import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ReportHeaderListRelationFilterSchema } from './ReportHeaderListRelationFilterSchema';
import { StatementListRelationFilterSchema } from './StatementListRelationFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CompanyWhereInputSchema: z.ZodType<Prisma.CompanyWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => CompanyWhereInputSchema), z.lazy(() => CompanyWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => CompanyWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => CompanyWhereInputSchema), z.lazy(() => CompanyWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    currency: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    statements: z.lazy(() => StatementListRelationFilterSchema).optional(),
    reports: z.lazy(() => ReportHeaderListRelationFilterSchema).optional(),
  })
  .strict();

export default CompanyWhereInputSchema;

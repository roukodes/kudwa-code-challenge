import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ReportHeaderListRelationFilterSchema } from './ReportHeaderListRelationFilterSchema';
import { StatementListRelationFilterSchema } from './StatementListRelationFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CompanyWhereUniqueInputSchema: z.ZodType<Prisma.CompanyWhereUniqueInput> = z
  .object({
    id: z.number().int(),
  })
  .and(
    z
      .object({
        id: z.number().int().optional(),
        AND: z
          .union([
            z.lazy(() => CompanyWhereInputSchema),
            z.lazy(() => CompanyWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => CompanyWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => CompanyWhereInputSchema),
            z.lazy(() => CompanyWhereInputSchema).array(),
          ])
          .optional(),
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
      .strict(),
  );

export default CompanyWhereUniqueInputSchema;

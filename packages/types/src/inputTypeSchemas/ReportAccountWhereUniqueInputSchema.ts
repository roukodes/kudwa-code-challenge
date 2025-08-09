import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumReportAccountTypeNullableFilterSchema } from './EnumReportAccountTypeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { ReportAccountListRelationFilterSchema } from './ReportAccountListRelationFilterSchema';
import { ReportAccountNullableScalarRelationFilterSchema } from './ReportAccountNullableScalarRelationFilterSchema';
import { ReportAccountTypeSchema } from './ReportAccountTypeSchema';
import { ReportAccountValueListRelationFilterSchema } from './ReportAccountValueListRelationFilterSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';
import { ReportHeaderScalarRelationFilterSchema } from './ReportHeaderScalarRelationFilterSchema';
import { ReportHeaderWhereInputSchema } from './ReportHeaderWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const ReportAccountWhereUniqueInputSchema: z.ZodType<Prisma.ReportAccountWhereUniqueInput> =
  z
    .object({
      id: z.number().int(),
    })
    .and(
      z
        .object({
          id: z.number().int().optional(),
          AND: z
            .union([
              z.lazy(() => ReportAccountWhereInputSchema),
              z.lazy(() => ReportAccountWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ReportAccountWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ReportAccountWhereInputSchema),
              z.lazy(() => ReportAccountWhereInputSchema).array(),
            ])
            .optional(),
          reportId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
          accountName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
          parentAccountId: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
            .optional()
            .nullable(),
          type: z
            .union([
              z.lazy(() => EnumReportAccountTypeNullableFilterSchema),
              z.lazy(() => ReportAccountTypeSchema),
            ])
            .optional()
            .nullable(),
          report: z
            .union([
              z.lazy(() => ReportHeaderScalarRelationFilterSchema),
              z.lazy(() => ReportHeaderWhereInputSchema),
            ])
            .optional(),
          parentAccount: z
            .union([
              z.lazy(() => ReportAccountNullableScalarRelationFilterSchema),
              z.lazy(() => ReportAccountWhereInputSchema),
            ])
            .optional()
            .nullable(),
          childAccounts: z.lazy(() => ReportAccountListRelationFilterSchema).optional(),
          values: z.lazy(() => ReportAccountValueListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export default ReportAccountWhereUniqueInputSchema;

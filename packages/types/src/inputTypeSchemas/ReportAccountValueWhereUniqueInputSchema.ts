import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PeriodScalarRelationFilterSchema } from './PeriodScalarRelationFilterSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';
import { ReportAccountScalarRelationFilterSchema } from './ReportAccountScalarRelationFilterSchema';
import { ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema } from './ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema';
import { ReportAccountValueWhereInputSchema } from './ReportAccountValueWhereInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountValueWhereUniqueInputSchema: z.ZodType<Prisma.ReportAccountValueWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.number().int(),
        accountId_periodId: z.lazy(
          () => ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.number().int(),
      }),
      z.object({
        accountId_periodId: z.lazy(
          () => ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema,
        ),
      }),
    ])
    .and(
      z
        .object({
          id: z.number().int().optional(),
          accountId_periodId: z
            .lazy(() => ReportAccountValueAccountId_periodIdCompoundUniqueInputSchema)
            .optional(),
          AND: z
            .union([
              z.lazy(() => ReportAccountValueWhereInputSchema),
              z.lazy(() => ReportAccountValueWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ReportAccountValueWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ReportAccountValueWhereInputSchema),
              z.lazy(() => ReportAccountValueWhereInputSchema).array(),
            ])
            .optional(),
          accountId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
          periodId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
          amount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
          account: z
            .union([
              z.lazy(() => ReportAccountScalarRelationFilterSchema),
              z.lazy(() => ReportAccountWhereInputSchema),
            ])
            .optional(),
          period: z
            .union([
              z.lazy(() => PeriodScalarRelationFilterSchema),
              z.lazy(() => PeriodWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export default ReportAccountValueWhereUniqueInputSchema;

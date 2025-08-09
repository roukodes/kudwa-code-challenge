import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PeriodStartDateEndDateCompoundUniqueInputSchema } from './PeriodStartDateEndDateCompoundUniqueInputSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';
import { ReportAccountValueListRelationFilterSchema } from './ReportAccountValueListRelationFilterSchema';
import { StatementListRelationFilterSchema } from './StatementListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const PeriodWhereUniqueInputSchema: z.ZodType<Prisma.PeriodWhereUniqueInput> = z
  .union([
    z.object({
      id: z.number().int(),
      startDate_endDate: z.lazy(() => PeriodStartDateEndDateCompoundUniqueInputSchema),
    }),
    z.object({
      id: z.number().int(),
    }),
    z.object({
      startDate_endDate: z.lazy(() => PeriodStartDateEndDateCompoundUniqueInputSchema),
    }),
  ])
  .and(
    z
      .object({
        id: z.number().int().optional(),
        startDate_endDate: z.lazy(() => PeriodStartDateEndDateCompoundUniqueInputSchema).optional(),
        AND: z
          .union([
            z.lazy(() => PeriodWhereInputSchema),
            z.lazy(() => PeriodWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => PeriodWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => PeriodWhereInputSchema),
            z.lazy(() => PeriodWhereInputSchema).array(),
          ])
          .optional(),
        startDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        endDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        label: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        statements: z.lazy(() => StatementListRelationFilterSchema).optional(),
        reportValues: z.lazy(() => ReportAccountValueListRelationFilterSchema).optional(),
      })
      .strict(),
  );

export default PeriodWhereUniqueInputSchema;

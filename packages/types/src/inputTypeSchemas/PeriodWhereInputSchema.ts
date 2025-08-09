import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ReportAccountValueListRelationFilterSchema } from './ReportAccountValueListRelationFilterSchema';
import { StatementListRelationFilterSchema } from './StatementListRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const PeriodWhereInputSchema: z.ZodType<Prisma.PeriodWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => PeriodWhereInputSchema), z.lazy(() => PeriodWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => PeriodWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => PeriodWhereInputSchema), z.lazy(() => PeriodWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    startDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    endDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    label: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    statements: z.lazy(() => StatementListRelationFilterSchema).optional(),
    reportValues: z.lazy(() => ReportAccountValueListRelationFilterSchema).optional(),
  })
  .strict();

export default PeriodWhereInputSchema;

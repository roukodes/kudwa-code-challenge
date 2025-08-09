import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PeriodScalarRelationFilterSchema } from './PeriodScalarRelationFilterSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';
import { ReportAccountScalarRelationFilterSchema } from './ReportAccountScalarRelationFilterSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountValueWhereInputSchema: z.ZodType<Prisma.ReportAccountValueWhereInput> = z
  .object({
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
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    accountId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    periodId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
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
      .union([z.lazy(() => PeriodScalarRelationFilterSchema), z.lazy(() => PeriodWhereInputSchema)])
      .optional(),
  })
  .strict();

export default ReportAccountValueWhereInputSchema;

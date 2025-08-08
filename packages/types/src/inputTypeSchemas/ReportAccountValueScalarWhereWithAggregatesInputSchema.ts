import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const ReportAccountValueScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportAccountValueScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ReportAccountValueScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ReportAccountValueScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ReportAccountValueScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ReportAccountValueScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ReportAccountValueScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      accountId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      periodId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      amount: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountValueScalarWhereWithAggregatesInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';

export const StatementScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StatementScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StatementScalarWhereWithAggregatesInputSchema),
          z.lazy(() => StatementScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StatementScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StatementScalarWhereWithAggregatesInputSchema),
          z.lazy(() => StatementScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      companyId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      periodId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      rootfiId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      grossProfit: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      operatingProfit: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      netProfit: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      earningsBeforeTaxes: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      taxes: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
      customFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
    })
    .strict();

export default StatementScalarWhereWithAggregatesInputSchema;

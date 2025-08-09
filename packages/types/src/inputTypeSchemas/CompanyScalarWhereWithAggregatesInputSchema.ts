import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const CompanyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompanyScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),
          z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CompanyScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),
          z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      name: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      currency: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
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

export default CompanyScalarWhereWithAggregatesInputSchema;

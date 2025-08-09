import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumStatementCategoryTypeWithAggregatesFilterSchema } from './EnumStatementCategoryTypeWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const StatementCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StatementCategoryScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StatementCategoryScalarWhereWithAggregatesInputSchema),
          z.lazy(() => StatementCategoryScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StatementCategoryScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StatementCategoryScalarWhereWithAggregatesInputSchema),
          z.lazy(() => StatementCategoryScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      statementId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      type: z
        .union([
          z.lazy(() => EnumStatementCategoryTypeWithAggregatesFilterSchema),
          z.lazy(() => StatementCategoryTypeSchema),
        ])
        .optional(),
      name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      totalValue: z
        .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
        .optional()
        .nullable(),
    })
    .strict();

export default StatementCategoryScalarWhereWithAggregatesInputSchema;

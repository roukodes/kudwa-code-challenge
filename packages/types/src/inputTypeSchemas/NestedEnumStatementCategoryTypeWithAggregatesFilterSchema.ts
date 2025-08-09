import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NestedEnumStatementCategoryTypeFilterSchema } from './NestedEnumStatementCategoryTypeFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';

export const NestedEnumStatementCategoryTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStatementCategoryTypeWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => StatementCategoryTypeSchema).optional(),
      in: z
        .lazy(() => StatementCategoryTypeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => StatementCategoryTypeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => StatementCategoryTypeSchema),
          z.lazy(() => NestedEnumStatementCategoryTypeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumStatementCategoryTypeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumStatementCategoryTypeFilterSchema).optional(),
    })
    .strict();

export default NestedEnumStatementCategoryTypeWithAggregatesFilterSchema;

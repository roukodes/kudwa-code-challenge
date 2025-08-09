import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';

export const NestedEnumStatementCategoryTypeFilterSchema: z.ZodType<Prisma.NestedEnumStatementCategoryTypeFilter> =
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
          z.lazy(() => NestedEnumStatementCategoryTypeFilterSchema),
        ])
        .optional(),
    })
    .strict();

export default NestedEnumStatementCategoryTypeFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NestedEnumStatementCategoryTypeFilterSchema } from './NestedEnumStatementCategoryTypeFilterSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';

export const EnumStatementCategoryTypeFilterSchema: z.ZodType<Prisma.EnumStatementCategoryTypeFilter> =
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

export default EnumStatementCategoryTypeFilterSchema;

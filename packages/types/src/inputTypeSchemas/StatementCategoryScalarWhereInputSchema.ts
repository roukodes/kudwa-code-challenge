import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumStatementCategoryTypeFilterSchema } from './EnumStatementCategoryTypeFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const StatementCategoryScalarWhereInputSchema: z.ZodType<Prisma.StatementCategoryScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StatementCategoryScalarWhereInputSchema),
          z.lazy(() => StatementCategoryScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StatementCategoryScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StatementCategoryScalarWhereInputSchema),
          z.lazy(() => StatementCategoryScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      statementId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      type: z
        .union([
          z.lazy(() => EnumStatementCategoryTypeFilterSchema),
          z.lazy(() => StatementCategoryTypeSchema),
        ])
        .optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      totalValue: z
        .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
    })
    .strict();

export default StatementCategoryScalarWhereInputSchema;

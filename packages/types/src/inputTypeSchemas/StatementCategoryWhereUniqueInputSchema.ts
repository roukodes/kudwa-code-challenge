import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { EnumStatementCategoryTypeFilterSchema } from './EnumStatementCategoryTypeFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';
import { StatementCategoryWhereInputSchema } from './StatementCategoryWhereInputSchema';
import { StatementLineItemListRelationFilterSchema } from './StatementLineItemListRelationFilterSchema';
import { StatementScalarRelationFilterSchema } from './StatementScalarRelationFilterSchema';
import { StatementWhereInputSchema } from './StatementWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const StatementCategoryWhereUniqueInputSchema: z.ZodType<Prisma.StatementCategoryWhereUniqueInput> =
  z
    .object({
      id: z.number().int(),
    })
    .and(
      z
        .object({
          id: z.number().int().optional(),
          AND: z
            .union([
              z.lazy(() => StatementCategoryWhereInputSchema),
              z.lazy(() => StatementCategoryWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => StatementCategoryWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => StatementCategoryWhereInputSchema),
              z.lazy(() => StatementCategoryWhereInputSchema).array(),
            ])
            .optional(),
          statementId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
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
          statement: z
            .union([
              z.lazy(() => StatementScalarRelationFilterSchema),
              z.lazy(() => StatementWhereInputSchema),
            ])
            .optional(),
          lineItems: z.lazy(() => StatementLineItemListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export default StatementCategoryWhereUniqueInputSchema;

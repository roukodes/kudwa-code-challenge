import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StatementCategoryScalarRelationFilterSchema } from './StatementCategoryScalarRelationFilterSchema';
import { StatementCategoryWhereInputSchema } from './StatementCategoryWhereInputSchema';
import { StatementLineItemListRelationFilterSchema } from './StatementLineItemListRelationFilterSchema';
import { StatementLineItemNullableScalarRelationFilterSchema } from './StatementLineItemNullableScalarRelationFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const StatementLineItemWhereInputSchema: z.ZodType<Prisma.StatementLineItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StatementLineItemWhereInputSchema),
        z.lazy(() => StatementLineItemWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StatementLineItemWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StatementLineItemWhereInputSchema),
        z.lazy(() => StatementLineItemWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    categoryId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    parentLineItemId: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    value: z
      .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    accountId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => StatementCategoryScalarRelationFilterSchema),
        z.lazy(() => StatementCategoryWhereInputSchema),
      ])
      .optional(),
    parentLineItem: z
      .union([
        z.lazy(() => StatementLineItemNullableScalarRelationFilterSchema),
        z.lazy(() => StatementLineItemWhereInputSchema),
      ])
      .optional()
      .nullable(),
    childLineItems: z.lazy(() => StatementLineItemListRelationFilterSchema).optional(),
  })
  .strict();

export default StatementLineItemWhereInputSchema;

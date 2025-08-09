import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const StatementLineItemScalarWhereInputSchema: z.ZodType<Prisma.StatementLineItemScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StatementLineItemScalarWhereInputSchema),
          z.lazy(() => StatementLineItemScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StatementLineItemScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StatementLineItemScalarWhereInputSchema),
          z.lazy(() => StatementLineItemScalarWhereInputSchema).array(),
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
    })
    .strict();

export default StatementLineItemScalarWhereInputSchema;

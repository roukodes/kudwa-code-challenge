import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const AccountMappingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountMappingScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountMappingScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountMappingScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountMappingScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountMappingScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountMappingScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      statementLineItemId: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      reportAccountId: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      notes: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export default AccountMappingScalarWhereWithAggregatesInputSchema;

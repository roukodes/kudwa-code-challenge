import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const AccountMappingScalarWhereInputSchema: z.ZodType<Prisma.AccountMappingScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountMappingScalarWhereInputSchema),
          z.lazy(() => AccountMappingScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountMappingScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountMappingScalarWhereInputSchema),
          z.lazy(() => AccountMappingScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      statementLineItemId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      reportAccountId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      notes: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export default AccountMappingScalarWhereInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { IntFilterSchema } from './IntFilterSchema';
import { ReportAccountScalarRelationFilterSchema } from './ReportAccountScalarRelationFilterSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';
import { StatementLineItemScalarRelationFilterSchema } from './StatementLineItemScalarRelationFilterSchema';
import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const AccountMappingWhereInputSchema: z.ZodType<Prisma.AccountMappingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountMappingWhereInputSchema),
        z.lazy(() => AccountMappingWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountMappingWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountMappingWhereInputSchema),
        z.lazy(() => AccountMappingWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    statementLineItemId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    reportAccountId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    notes: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    statementLineItem: z
      .union([
        z.lazy(() => StatementLineItemScalarRelationFilterSchema),
        z.lazy(() => StatementLineItemWhereInputSchema),
      ])
      .optional(),
    reportAccount: z
      .union([
        z.lazy(() => ReportAccountScalarRelationFilterSchema),
        z.lazy(() => ReportAccountWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export default AccountMappingWhereInputSchema;

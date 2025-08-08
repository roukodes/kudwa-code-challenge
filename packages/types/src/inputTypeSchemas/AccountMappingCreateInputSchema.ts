import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateNestedOneWithoutAccountMappingInputSchema } from './ReportAccountCreateNestedOneWithoutAccountMappingInputSchema';
import { StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema } from './StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema';

export const AccountMappingCreateInputSchema: z.ZodType<Prisma.AccountMappingCreateInput> = z
  .object({
    notes: z.string().optional().nullable(),
    statementLineItem: z.lazy(
      () => StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema,
    ),
    reportAccount: z.lazy(() => ReportAccountCreateNestedOneWithoutAccountMappingInputSchema),
  })
  .strict();

export default AccountMappingCreateInputSchema;

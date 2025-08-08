import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateNestedOneWithoutAccountMappingInputSchema } from './ReportAccountCreateNestedOneWithoutAccountMappingInputSchema';

export const AccountMappingCreateWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingCreateWithoutStatementLineItemInput> =
  z
    .object({
      notes: z.string().optional().nullable(),
      reportAccount: z.lazy(() => ReportAccountCreateNestedOneWithoutAccountMappingInputSchema),
    })
    .strict();

export default AccountMappingCreateWithoutStatementLineItemInputSchema;

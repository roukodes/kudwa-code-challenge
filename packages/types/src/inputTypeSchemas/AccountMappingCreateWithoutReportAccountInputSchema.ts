import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema } from './StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema';

export const AccountMappingCreateWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingCreateWithoutReportAccountInput> =
  z
    .object({
      notes: z.string().optional().nullable(),
      statementLineItem: z.lazy(
        () => StatementLineItemCreateNestedOneWithoutAccountMappingInputSchema,
      ),
    })
    .strict();

export default AccountMappingCreateWithoutReportAccountInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';

export const AccountMappingSelectSchema: z.ZodType<Prisma.AccountMappingSelect> = z
  .object({
    id: z.boolean().optional(),
    statementLineItemId: z.boolean().optional(),
    reportAccountId: z.boolean().optional(),
    notes: z.boolean().optional(),
    statementLineItem: z.union([z.boolean(), z.lazy(() => StatementLineItemArgsSchema)]).optional(),
    reportAccount: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
  })
  .strict();

export default AccountMappingSelectSchema;

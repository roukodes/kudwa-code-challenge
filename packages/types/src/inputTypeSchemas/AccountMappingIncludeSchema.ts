import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';

export const AccountMappingIncludeSchema: z.ZodType<Prisma.AccountMappingInclude> = z
  .object({
    statementLineItem: z.union([z.boolean(), z.lazy(() => StatementLineItemArgsSchema)]).optional(),
    reportAccount: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
  })
  .strict();

export default AccountMappingIncludeSchema;

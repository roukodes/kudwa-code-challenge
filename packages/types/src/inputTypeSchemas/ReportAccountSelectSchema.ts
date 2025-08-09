import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingFindManyArgsSchema } from '../outputTypeSchemas/AccountMappingFindManyArgsSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
import { ReportAccountCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportAccountCountOutputTypeArgsSchema';
import { ReportAccountFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountFindManyArgsSchema';
import { ReportAccountValueFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountValueFindManyArgsSchema';
import { ReportHeaderArgsSchema } from '../outputTypeSchemas/ReportHeaderArgsSchema';

export const ReportAccountSelectSchema: z.ZodType<Prisma.ReportAccountSelect> = z
  .object({
    id: z.boolean().optional(),
    reportId: z.boolean().optional(),
    accountName: z.boolean().optional(),
    parentAccountId: z.boolean().optional(),
    type: z.boolean().optional(),
    report: z.union([z.boolean(), z.lazy(() => ReportHeaderArgsSchema)]).optional(),
    parentAccount: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
    childAccounts: z.union([z.boolean(), z.lazy(() => ReportAccountFindManyArgsSchema)]).optional(),
    values: z.union([z.boolean(), z.lazy(() => ReportAccountValueFindManyArgsSchema)]).optional(),
    AccountMapping: z
      .union([z.boolean(), z.lazy(() => AccountMappingFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => ReportAccountCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default ReportAccountSelectSchema;

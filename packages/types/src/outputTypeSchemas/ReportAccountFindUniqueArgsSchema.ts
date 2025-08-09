import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountIncludeSchema } from '../inputTypeSchemas/ReportAccountIncludeSchema';
import { ReportAccountWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccountWhereUniqueInputSchema';
import { AccountMappingFindManyArgsSchema } from '../outputTypeSchemas/AccountMappingFindManyArgsSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
import { ReportAccountCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportAccountCountOutputTypeArgsSchema';
import { ReportAccountFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountFindManyArgsSchema';
import { ReportAccountValueFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountValueFindManyArgsSchema';
import { ReportHeaderArgsSchema } from '../outputTypeSchemas/ReportHeaderArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const ReportAccountFindUniqueArgsSchema: z.ZodType<Prisma.ReportAccountFindUniqueArgs> = z
  .object({
    select: ReportAccountSelectSchema.optional(),
    include: z.lazy(() => ReportAccountIncludeSchema).optional(),
    where: ReportAccountWhereUniqueInputSchema,
  })
  .strict();

export default ReportAccountFindUniqueArgsSchema;

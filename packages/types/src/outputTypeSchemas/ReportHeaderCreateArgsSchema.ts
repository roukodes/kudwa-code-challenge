import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateInputSchema } from '../inputTypeSchemas/ReportHeaderCreateInputSchema';
import { ReportHeaderIncludeSchema } from '../inputTypeSchemas/ReportHeaderIncludeSchema';
import { ReportHeaderUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportHeaderUncheckedCreateInputSchema';
import { CompanyArgsSchema } from '../outputTypeSchemas/CompanyArgsSchema';
import { ReportAccountFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountFindManyArgsSchema';
import { ReportHeaderCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportHeaderCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportHeaderSelectSchema: z.ZodType<Prisma.ReportHeaderSelect> = z
  .object({
    id: z.boolean().optional(),
    companyId: z.boolean().optional(),
    reportName: z.boolean().optional(),
    basis: z.boolean().optional(),
    startPeriod: z.boolean().optional(),
    endPeriod: z.boolean().optional(),
    currency: z.boolean().optional(),
    options: z.boolean().optional(),
    company: z.union([z.boolean(), z.lazy(() => CompanyArgsSchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => ReportAccountFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ReportHeaderCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const ReportHeaderCreateArgsSchema: z.ZodType<Prisma.ReportHeaderCreateArgs> = z
  .object({
    select: ReportHeaderSelectSchema.optional(),
    include: z.lazy(() => ReportHeaderIncludeSchema).optional(),
    data: z.union([ReportHeaderCreateInputSchema, ReportHeaderUncheckedCreateInputSchema]),
  })
  .strict();

export default ReportHeaderCreateArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderIncludeSchema } from '../inputTypeSchemas/ReportHeaderIncludeSchema';
import { ReportHeaderUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportHeaderUncheckedUpdateInputSchema';
import { ReportHeaderUpdateInputSchema } from '../inputTypeSchemas/ReportHeaderUpdateInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from '../inputTypeSchemas/ReportHeaderWhereUniqueInputSchema';
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

export const ReportHeaderUpdateArgsSchema: z.ZodType<Prisma.ReportHeaderUpdateArgs> = z
  .object({
    select: ReportHeaderSelectSchema.optional(),
    include: z.lazy(() => ReportHeaderIncludeSchema).optional(),
    data: z.union([ReportHeaderUpdateInputSchema, ReportHeaderUncheckedUpdateInputSchema]),
    where: ReportHeaderWhereUniqueInputSchema,
  })
  .strict();

export default ReportHeaderUpdateArgsSchema;

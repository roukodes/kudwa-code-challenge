import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyArgsSchema } from '../outputTypeSchemas/CompanyArgsSchema';
import { ReportAccountFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountFindManyArgsSchema';
import { ReportHeaderCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportHeaderCountOutputTypeArgsSchema';

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

export default ReportHeaderSelectSchema;

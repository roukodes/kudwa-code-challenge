import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyArgsSchema } from '../outputTypeSchemas/CompanyArgsSchema';
import { ReportAccountFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountFindManyArgsSchema';
import { ReportHeaderCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportHeaderCountOutputTypeArgsSchema';

export const ReportHeaderIncludeSchema: z.ZodType<Prisma.ReportHeaderInclude> = z
  .object({
    company: z.union([z.boolean(), z.lazy(() => CompanyArgsSchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => ReportAccountFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ReportHeaderCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default ReportHeaderIncludeSchema;

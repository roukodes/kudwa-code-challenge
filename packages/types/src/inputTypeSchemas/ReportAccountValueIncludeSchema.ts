import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodArgsSchema } from '../outputTypeSchemas/PeriodArgsSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';

export const ReportAccountValueIncludeSchema: z.ZodType<Prisma.ReportAccountValueInclude> = z
  .object({
    account: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
    period: z.union([z.boolean(), z.lazy(() => PeriodArgsSchema)]).optional(),
  })
  .strict();

export default ReportAccountValueIncludeSchema;

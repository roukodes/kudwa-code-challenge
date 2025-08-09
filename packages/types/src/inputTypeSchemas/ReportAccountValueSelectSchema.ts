import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodArgsSchema } from '../outputTypeSchemas/PeriodArgsSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';

export const ReportAccountValueSelectSchema: z.ZodType<Prisma.ReportAccountValueSelect> = z
  .object({
    id: z.boolean().optional(),
    accountId: z.boolean().optional(),
    periodId: z.boolean().optional(),
    amount: z.boolean().optional(),
    account: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
    period: z.union([z.boolean(), z.lazy(() => PeriodArgsSchema)]).optional(),
  })
  .strict();

export default ReportAccountValueSelectSchema;

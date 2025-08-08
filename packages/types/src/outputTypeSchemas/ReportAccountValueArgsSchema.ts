import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueIncludeSchema } from '../inputTypeSchemas/ReportAccountValueIncludeSchema';
import { ReportAccountValueSelectSchema } from '../inputTypeSchemas/ReportAccountValueSelectSchema';

export const ReportAccountValueArgsSchema: z.ZodType<Prisma.ReportAccountValueDefaultArgs> = z
  .object({
    select: z.lazy(() => ReportAccountValueSelectSchema).optional(),
    include: z.lazy(() => ReportAccountValueIncludeSchema).optional(),
  })
  .strict();

export default ReportAccountValueArgsSchema;

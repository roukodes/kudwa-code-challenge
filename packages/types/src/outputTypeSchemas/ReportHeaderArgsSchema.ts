import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderIncludeSchema } from '../inputTypeSchemas/ReportHeaderIncludeSchema';
import { ReportHeaderSelectSchema } from '../inputTypeSchemas/ReportHeaderSelectSchema';

export const ReportHeaderArgsSchema: z.ZodType<Prisma.ReportHeaderDefaultArgs> = z
  .object({
    select: z.lazy(() => ReportHeaderSelectSchema).optional(),
    include: z.lazy(() => ReportHeaderIncludeSchema).optional(),
  })
  .strict();

export default ReportHeaderArgsSchema;

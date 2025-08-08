import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountIncludeSchema } from '../inputTypeSchemas/ReportAccountIncludeSchema';
import { ReportAccountSelectSchema } from '../inputTypeSchemas/ReportAccountSelectSchema';

export const ReportAccountArgsSchema: z.ZodType<Prisma.ReportAccountDefaultArgs> = z
  .object({
    select: z.lazy(() => ReportAccountSelectSchema).optional(),
    include: z.lazy(() => ReportAccountIncludeSchema).optional(),
  })
  .strict();

export default ReportAccountArgsSchema;

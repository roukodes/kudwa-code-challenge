import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCountOutputTypeSelectSchema } from './ReportHeaderCountOutputTypeSelectSchema';

export const ReportHeaderCountOutputTypeArgsSchema: z.ZodType<Prisma.ReportHeaderCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ReportHeaderCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default ReportHeaderCountOutputTypeSelectSchema;

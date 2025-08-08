import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCountOutputTypeSelectSchema } from './ReportAccountCountOutputTypeSelectSchema';

export const ReportAccountCountOutputTypeArgsSchema: z.ZodType<Prisma.ReportAccountCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ReportAccountCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default ReportAccountCountOutputTypeSelectSchema;

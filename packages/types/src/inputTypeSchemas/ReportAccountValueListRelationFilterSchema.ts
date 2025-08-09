import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueWhereInputSchema } from './ReportAccountValueWhereInputSchema';

export const ReportAccountValueListRelationFilterSchema: z.ZodType<Prisma.ReportAccountValueListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ReportAccountValueWhereInputSchema).optional(),
      some: z.lazy(() => ReportAccountValueWhereInputSchema).optional(),
      none: z.lazy(() => ReportAccountValueWhereInputSchema).optional(),
    })
    .strict();

export default ReportAccountValueListRelationFilterSchema;

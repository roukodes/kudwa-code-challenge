import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderWhereInputSchema } from './ReportHeaderWhereInputSchema';

export const ReportHeaderListRelationFilterSchema: z.ZodType<Prisma.ReportHeaderListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
      some: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
      none: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
    })
    .strict();

export default ReportHeaderListRelationFilterSchema;

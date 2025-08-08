import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountListRelationFilterSchema: z.ZodType<Prisma.ReportAccountListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ReportAccountWhereInputSchema).optional(),
      some: z.lazy(() => ReportAccountWhereInputSchema).optional(),
      none: z.lazy(() => ReportAccountWhereInputSchema).optional(),
    })
    .strict();

export default ReportAccountListRelationFilterSchema;

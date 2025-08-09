import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderWhereInputSchema } from './ReportHeaderWhereInputSchema';

export const ReportHeaderScalarRelationFilterSchema: z.ZodType<Prisma.ReportHeaderScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
      isNot: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
    })
    .strict();

export default ReportHeaderScalarRelationFilterSchema;

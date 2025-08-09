import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountScalarRelationFilterSchema: z.ZodType<Prisma.ReportAccountScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => ReportAccountWhereInputSchema).optional(),
      isNot: z.lazy(() => ReportAccountWhereInputSchema).optional(),
    })
    .strict();

export default ReportAccountScalarRelationFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountNullableScalarRelationFilterSchema: z.ZodType<Prisma.ReportAccountNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => ReportAccountWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => ReportAccountWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountNullableScalarRelationFilterSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';

export const PeriodScalarRelationFilterSchema: z.ZodType<Prisma.PeriodScalarRelationFilter> = z
  .object({
    is: z.lazy(() => PeriodWhereInputSchema).optional(),
    isNot: z.lazy(() => PeriodWhereInputSchema).optional(),
  })
  .strict();

export default PeriodScalarRelationFilterSchema;

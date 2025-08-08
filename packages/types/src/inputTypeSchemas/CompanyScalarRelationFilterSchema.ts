import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyScalarRelationFilterSchema: z.ZodType<Prisma.CompanyScalarRelationFilter> = z
  .object({
    is: z.lazy(() => CompanyWhereInputSchema).optional(),
    isNot: z.lazy(() => CompanyWhereInputSchema).optional(),
  })
  .strict();

export default CompanyScalarRelationFilterSchema;

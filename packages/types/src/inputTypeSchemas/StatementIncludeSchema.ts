import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyArgsSchema } from '../outputTypeSchemas/CompanyArgsSchema';
import { PeriodArgsSchema } from '../outputTypeSchemas/PeriodArgsSchema';
import { StatementCategoryFindManyArgsSchema } from '../outputTypeSchemas/StatementCategoryFindManyArgsSchema';
import { StatementCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementCountOutputTypeArgsSchema';

export const StatementIncludeSchema: z.ZodType<Prisma.StatementInclude> = z
  .object({
    company: z.union([z.boolean(), z.lazy(() => CompanyArgsSchema)]).optional(),
    period: z.union([z.boolean(), z.lazy(() => PeriodArgsSchema)]).optional(),
    categories: z
      .union([z.boolean(), z.lazy(() => StatementCategoryFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => StatementCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default StatementIncludeSchema;

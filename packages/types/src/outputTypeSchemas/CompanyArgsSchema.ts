import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyIncludeSchema } from '../inputTypeSchemas/CompanyIncludeSchema';
import { CompanySelectSchema } from '../inputTypeSchemas/CompanySelectSchema';

export const CompanyArgsSchema: z.ZodType<Prisma.CompanyDefaultArgs> = z
  .object({
    select: z.lazy(() => CompanySelectSchema).optional(),
    include: z.lazy(() => CompanyIncludeSchema).optional(),
  })
  .strict();

export default CompanyArgsSchema;

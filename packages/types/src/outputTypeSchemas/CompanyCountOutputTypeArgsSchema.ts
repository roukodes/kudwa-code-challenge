import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCountOutputTypeSelectSchema } from './CompanyCountOutputTypeSelectSchema';

export const CompanyCountOutputTypeArgsSchema: z.ZodType<Prisma.CompanyCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => CompanyCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default CompanyCountOutputTypeSelectSchema;

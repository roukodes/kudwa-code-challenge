import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCountOutputTypeSelectSchema } from './StatementCategoryCountOutputTypeSelectSchema';

export const StatementCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.StatementCategoryCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => StatementCategoryCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export default StatementCategoryCountOutputTypeSelectSchema;

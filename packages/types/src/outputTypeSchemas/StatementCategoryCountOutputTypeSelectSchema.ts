import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.StatementCategoryCountOutputTypeSelect> =
  z
    .object({
      lineItems: z.boolean().optional(),
    })
    .strict();

export default StatementCategoryCountOutputTypeSelectSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementCountOutputTypeSelectSchema: z.ZodType<Prisma.StatementCountOutputTypeSelect> =
  z
    .object({
      categories: z.boolean().optional(),
    })
    .strict();

export default StatementCountOutputTypeSelectSchema;

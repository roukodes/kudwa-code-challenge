import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';

export const StatementCategoryCreateManyInputSchema: z.ZodType<Prisma.StatementCategoryCreateManyInput> =
  z
    .object({
      id: z.number().int().optional(),
      statementId: z.number().int(),
      type: z.lazy(() => StatementCategoryTypeSchema),
      name: z.string(),
      totalValue: z.number().optional().nullable(),
    })
    .strict();

export default StatementCategoryCreateManyInputSchema;

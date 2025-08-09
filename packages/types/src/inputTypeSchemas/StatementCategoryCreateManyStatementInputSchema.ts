import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';

export const StatementCategoryCreateManyStatementInputSchema: z.ZodType<Prisma.StatementCategoryCreateManyStatementInput> =
  z
    .object({
      id: z.number().int().optional(),
      type: z.lazy(() => StatementCategoryTypeSchema),
      name: z.string(),
      totalValue: z.number().optional().nullable(),
    })
    .strict();

export default StatementCategoryCreateManyStatementInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateManyStatementInputSchema } from './StatementCategoryCreateManyStatementInputSchema';

export const StatementCategoryCreateManyStatementInputEnvelopeSchema: z.ZodType<Prisma.StatementCategoryCreateManyStatementInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StatementCategoryCreateManyStatementInputSchema),
        z.lazy(() => StatementCategoryCreateManyStatementInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default StatementCategoryCreateManyStatementInputEnvelopeSchema;

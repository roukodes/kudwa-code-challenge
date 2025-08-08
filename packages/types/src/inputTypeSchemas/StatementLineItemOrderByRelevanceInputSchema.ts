import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';
import { StatementLineItemOrderByRelevanceFieldEnumSchema } from './StatementLineItemOrderByRelevanceFieldEnumSchema';

export const StatementLineItemOrderByRelevanceInputSchema: z.ZodType<Prisma.StatementLineItemOrderByRelevanceInput> =
  z
    .object({
      fields: z.union([
        z.lazy(() => StatementLineItemOrderByRelevanceFieldEnumSchema),
        z.lazy(() => StatementLineItemOrderByRelevanceFieldEnumSchema).array(),
      ]),
      sort: z.lazy(() => SortOrderSchema),
      search: z.string(),
    })
    .strict();

export default StatementLineItemOrderByRelevanceInputSchema;

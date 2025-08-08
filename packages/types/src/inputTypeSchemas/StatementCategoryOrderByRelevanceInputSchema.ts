import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';
import { StatementCategoryOrderByRelevanceFieldEnumSchema } from './StatementCategoryOrderByRelevanceFieldEnumSchema';

export const StatementCategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.StatementCategoryOrderByRelevanceInput> =
  z
    .object({
      fields: z.union([
        z.lazy(() => StatementCategoryOrderByRelevanceFieldEnumSchema),
        z.lazy(() => StatementCategoryOrderByRelevanceFieldEnumSchema).array(),
      ]),
      sort: z.lazy(() => SortOrderSchema),
      search: z.string(),
    })
    .strict();

export default StatementCategoryOrderByRelevanceInputSchema;

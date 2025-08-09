import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyOrderByRelevanceFieldEnumSchema } from './CompanyOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const CompanyOrderByRelevanceInputSchema: z.ZodType<Prisma.CompanyOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => CompanyOrderByRelevanceFieldEnumSchema),
      z.lazy(() => CompanyOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export default CompanyOrderByRelevanceInputSchema;

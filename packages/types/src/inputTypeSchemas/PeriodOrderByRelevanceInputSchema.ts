import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodOrderByRelevanceFieldEnumSchema } from './PeriodOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const PeriodOrderByRelevanceInputSchema: z.ZodType<Prisma.PeriodOrderByRelevanceInput> = z
  .object({
    fields: z.union([
      z.lazy(() => PeriodOrderByRelevanceFieldEnumSchema),
      z.lazy(() => PeriodOrderByRelevanceFieldEnumSchema).array(),
    ]),
    sort: z.lazy(() => SortOrderSchema),
    search: z.string(),
  })
  .strict();

export default PeriodOrderByRelevanceInputSchema;

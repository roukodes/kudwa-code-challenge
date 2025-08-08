import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountOrderByRelevanceFieldEnumSchema } from './ReportAccountOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportAccountOrderByRelevanceInput> =
  z
    .object({
      fields: z.union([
        z.lazy(() => ReportAccountOrderByRelevanceFieldEnumSchema),
        z.lazy(() => ReportAccountOrderByRelevanceFieldEnumSchema).array(),
      ]),
      sort: z.lazy(() => SortOrderSchema),
      search: z.string(),
    })
    .strict();

export default ReportAccountOrderByRelevanceInputSchema;

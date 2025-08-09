import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderOrderByRelevanceFieldEnumSchema } from './ReportHeaderOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderOrderByRelevanceInputSchema: z.ZodType<Prisma.ReportHeaderOrderByRelevanceInput> =
  z
    .object({
      fields: z.union([
        z.lazy(() => ReportHeaderOrderByRelevanceFieldEnumSchema),
        z.lazy(() => ReportHeaderOrderByRelevanceFieldEnumSchema).array(),
      ]),
      sort: z.lazy(() => SortOrderSchema),
      search: z.string(),
    })
    .strict();

export default ReportHeaderOrderByRelevanceInputSchema;

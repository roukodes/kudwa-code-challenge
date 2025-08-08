import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingOrderByRelevanceFieldEnumSchema } from './AccountMappingOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AccountMappingOrderByRelevanceInputSchema: z.ZodType<Prisma.AccountMappingOrderByRelevanceInput> =
  z
    .object({
      fields: z.union([
        z.lazy(() => AccountMappingOrderByRelevanceFieldEnumSchema),
        z.lazy(() => AccountMappingOrderByRelevanceFieldEnumSchema).array(),
      ]),
      sort: z.lazy(() => SortOrderSchema),
      search: z.string(),
    })
    .strict();

export default AccountMappingOrderByRelevanceInputSchema;

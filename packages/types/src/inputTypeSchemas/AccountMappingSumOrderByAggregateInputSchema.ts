import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const AccountMappingSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMappingSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementLineItemId: z.lazy(() => SortOrderSchema).optional(),
      reportAccountId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default AccountMappingSumOrderByAggregateInputSchema;

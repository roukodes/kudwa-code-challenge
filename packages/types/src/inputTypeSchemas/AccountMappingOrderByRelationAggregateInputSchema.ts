import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { SortOrderSchema } from './SortOrderSchema';

export const AccountMappingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountMappingOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default AccountMappingOrderByRelationAggregateInputSchema;

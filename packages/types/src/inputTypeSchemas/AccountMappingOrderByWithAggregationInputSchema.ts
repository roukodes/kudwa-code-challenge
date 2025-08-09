import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingAvgOrderByAggregateInputSchema } from './AccountMappingAvgOrderByAggregateInputSchema';
import { AccountMappingCountOrderByAggregateInputSchema } from './AccountMappingCountOrderByAggregateInputSchema';
import { AccountMappingMaxOrderByAggregateInputSchema } from './AccountMappingMaxOrderByAggregateInputSchema';
import { AccountMappingMinOrderByAggregateInputSchema } from './AccountMappingMinOrderByAggregateInputSchema';
import { AccountMappingSumOrderByAggregateInputSchema } from './AccountMappingSumOrderByAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AccountMappingOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountMappingOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementLineItemId: z.lazy(() => SortOrderSchema).optional(),
      reportAccountId: z.lazy(() => SortOrderSchema).optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => AccountMappingCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AccountMappingAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AccountMappingMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AccountMappingMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AccountMappingSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default AccountMappingOrderByWithAggregationInputSchema;

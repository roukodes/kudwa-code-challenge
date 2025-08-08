import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingOrderByRelevanceInputSchema } from './AccountMappingOrderByRelevanceInputSchema';
import { ReportAccountOrderByWithRelationInputSchema } from './ReportAccountOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementLineItemOrderByWithRelationInputSchema } from './StatementLineItemOrderByWithRelationInputSchema';

export const AccountMappingOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountMappingOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      statementLineItemId: z.lazy(() => SortOrderSchema).optional(),
      reportAccountId: z.lazy(() => SortOrderSchema).optional(),
      notes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      statementLineItem: z.lazy(() => StatementLineItemOrderByWithRelationInputSchema).optional(),
      reportAccount: z.lazy(() => ReportAccountOrderByWithRelationInputSchema).optional(),
      _relevance: z.lazy(() => AccountMappingOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default AccountMappingOrderByWithRelationInputSchema;

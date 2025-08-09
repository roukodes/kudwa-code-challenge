import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingOrderByRelationAggregateInputSchema } from './AccountMappingOrderByRelationAggregateInputSchema';
import { ReportAccountOrderByRelationAggregateInputSchema } from './ReportAccountOrderByRelationAggregateInputSchema';
import { ReportAccountOrderByRelevanceInputSchema } from './ReportAccountOrderByRelevanceInputSchema';
import { ReportAccountValueOrderByRelationAggregateInputSchema } from './ReportAccountValueOrderByRelationAggregateInputSchema';
import { ReportHeaderOrderByWithRelationInputSchema } from './ReportHeaderOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccountOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportAccountOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      reportId: z.lazy(() => SortOrderSchema).optional(),
      accountName: z.lazy(() => SortOrderSchema).optional(),
      parentAccountId: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      report: z.lazy(() => ReportHeaderOrderByWithRelationInputSchema).optional(),
      parentAccount: z.lazy(() => ReportAccountOrderByWithRelationInputSchema).optional(),
      childAccounts: z.lazy(() => ReportAccountOrderByRelationAggregateInputSchema).optional(),
      values: z.lazy(() => ReportAccountValueOrderByRelationAggregateInputSchema).optional(),
      AccountMapping: z.lazy(() => AccountMappingOrderByRelationAggregateInputSchema).optional(),
      _relevance: z.lazy(() => ReportAccountOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default ReportAccountOrderByWithRelationInputSchema;

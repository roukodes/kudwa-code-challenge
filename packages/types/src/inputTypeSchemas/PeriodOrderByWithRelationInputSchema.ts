import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodOrderByRelevanceInputSchema } from './PeriodOrderByRelevanceInputSchema';
import { ReportAccountValueOrderByRelationAggregateInputSchema } from './ReportAccountValueOrderByRelationAggregateInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementOrderByRelationAggregateInputSchema } from './StatementOrderByRelationAggregateInputSchema';

export const PeriodOrderByWithRelationInputSchema: z.ZodType<Prisma.PeriodOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      startDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      label: z.lazy(() => SortOrderSchema).optional(),
      statements: z.lazy(() => StatementOrderByRelationAggregateInputSchema).optional(),
      reportValues: z.lazy(() => ReportAccountValueOrderByRelationAggregateInputSchema).optional(),
      _relevance: z.lazy(() => PeriodOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default PeriodOrderByWithRelationInputSchema;

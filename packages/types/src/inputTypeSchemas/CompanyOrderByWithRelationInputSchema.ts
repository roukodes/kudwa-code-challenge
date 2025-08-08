import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyOrderByRelevanceInputSchema } from './CompanyOrderByRelevanceInputSchema';
import { ReportHeaderOrderByRelationAggregateInputSchema } from './ReportHeaderOrderByRelationAggregateInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementOrderByRelationAggregateInputSchema } from './StatementOrderByRelationAggregateInputSchema';

export const CompanyOrderByWithRelationInputSchema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
      currency: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      createdAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      statements: z.lazy(() => StatementOrderByRelationAggregateInputSchema).optional(),
      reports: z.lazy(() => ReportHeaderOrderByRelationAggregateInputSchema).optional(),
      _relevance: z.lazy(() => CompanyOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default CompanyOrderByWithRelationInputSchema;

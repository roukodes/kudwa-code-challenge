import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyOrderByWithRelationInputSchema } from './CompanyOrderByWithRelationInputSchema';
import { ReportAccountOrderByRelationAggregateInputSchema } from './ReportAccountOrderByRelationAggregateInputSchema';
import { ReportHeaderOrderByRelevanceInputSchema } from './ReportHeaderOrderByRelevanceInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportHeaderOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportHeaderOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
      reportName: z.lazy(() => SortOrderSchema).optional(),
      basis: z.lazy(() => SortOrderSchema).optional(),
      startPeriod: z.lazy(() => SortOrderSchema).optional(),
      endPeriod: z.lazy(() => SortOrderSchema).optional(),
      currency: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      options: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
      accounts: z.lazy(() => ReportAccountOrderByRelationAggregateInputSchema).optional(),
      _relevance: z.lazy(() => ReportHeaderOrderByRelevanceInputSchema).optional(),
    })
    .strict();

export default ReportHeaderOrderByWithRelationInputSchema;

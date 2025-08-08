import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyOrderByWithRelationInputSchema } from './CompanyOrderByWithRelationInputSchema';
import { PeriodOrderByWithRelationInputSchema } from './PeriodOrderByWithRelationInputSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SortOrderSchema } from './SortOrderSchema';
import { StatementCategoryOrderByRelationAggregateInputSchema } from './StatementCategoryOrderByRelationAggregateInputSchema';

export const StatementOrderByWithRelationInputSchema: z.ZodType<Prisma.StatementOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      companyId: z.lazy(() => SortOrderSchema).optional(),
      periodId: z.lazy(() => SortOrderSchema).optional(),
      rootfiId: z.lazy(() => SortOrderSchema).optional(),
      grossProfit: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      operatingProfit: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      netProfit: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      earningsBeforeTaxes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      taxes: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      customFields: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      createdAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
      period: z.lazy(() => PeriodOrderByWithRelationInputSchema).optional(),
      categories: z.lazy(() => StatementCategoryOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export default StatementOrderByWithRelationInputSchema;

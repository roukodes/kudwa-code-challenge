import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementIncludeSchema } from '../inputTypeSchemas/StatementIncludeSchema';
import { StatementUncheckedUpdateInputSchema } from '../inputTypeSchemas/StatementUncheckedUpdateInputSchema';
import { StatementUpdateInputSchema } from '../inputTypeSchemas/StatementUpdateInputSchema';
import { StatementWhereUniqueInputSchema } from '../inputTypeSchemas/StatementWhereUniqueInputSchema';
import { CompanyArgsSchema } from '../outputTypeSchemas/CompanyArgsSchema';
import { PeriodArgsSchema } from '../outputTypeSchemas/PeriodArgsSchema';
import { StatementCategoryFindManyArgsSchema } from '../outputTypeSchemas/StatementCategoryFindManyArgsSchema';
import { StatementCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StatementSelectSchema: z.ZodType<Prisma.StatementSelect> = z
  .object({
    id: z.boolean().optional(),
    companyId: z.boolean().optional(),
    periodId: z.boolean().optional(),
    rootfiId: z.boolean().optional(),
    grossProfit: z.boolean().optional(),
    operatingProfit: z.boolean().optional(),
    netProfit: z.boolean().optional(),
    earningsBeforeTaxes: z.boolean().optional(),
    taxes: z.boolean().optional(),
    customFields: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    company: z.union([z.boolean(), z.lazy(() => CompanyArgsSchema)]).optional(),
    period: z.union([z.boolean(), z.lazy(() => PeriodArgsSchema)]).optional(),
    categories: z
      .union([z.boolean(), z.lazy(() => StatementCategoryFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => StatementCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const StatementUpdateArgsSchema: z.ZodType<Prisma.StatementUpdateArgs> = z
  .object({
    select: StatementSelectSchema.optional(),
    include: z.lazy(() => StatementIncludeSchema).optional(),
    data: z.union([StatementUpdateInputSchema, StatementUncheckedUpdateInputSchema]),
    where: StatementWhereUniqueInputSchema,
  })
  .strict();

export default StatementUpdateArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateInputSchema } from '../inputTypeSchemas/StatementCategoryCreateInputSchema';
import { StatementCategoryIncludeSchema } from '../inputTypeSchemas/StatementCategoryIncludeSchema';
import { StatementCategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/StatementCategoryUncheckedCreateInputSchema';
import { StatementArgsSchema } from '../outputTypeSchemas/StatementArgsSchema';
import { StatementCategoryCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementCategoryCountOutputTypeArgsSchema';
import { StatementLineItemFindManyArgsSchema } from '../outputTypeSchemas/StatementLineItemFindManyArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StatementCategorySelectSchema: z.ZodType<Prisma.StatementCategorySelect> = z
  .object({
    id: z.boolean().optional(),
    statementId: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    totalValue: z.boolean().optional(),
    statement: z.union([z.boolean(), z.lazy(() => StatementArgsSchema)]).optional(),
    lineItems: z.union([z.boolean(), z.lazy(() => StatementLineItemFindManyArgsSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StatementCategoryCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const StatementCategoryCreateArgsSchema: z.ZodType<Prisma.StatementCategoryCreateArgs> = z
  .object({
    select: StatementCategorySelectSchema.optional(),
    include: z.lazy(() => StatementCategoryIncludeSchema).optional(),
    data: z.union([
      StatementCategoryCreateInputSchema,
      StatementCategoryUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export default StatementCategoryCreateArgsSchema;

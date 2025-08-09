import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemIncludeSchema } from '../inputTypeSchemas/StatementLineItemIncludeSchema';
import { StatementLineItemWhereUniqueInputSchema } from '../inputTypeSchemas/StatementLineItemWhereUniqueInputSchema';
import { StatementCategoryArgsSchema } from '../outputTypeSchemas/StatementCategoryArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';
import { StatementLineItemCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementLineItemCountOutputTypeArgsSchema';
import { StatementLineItemFindManyArgsSchema } from '../outputTypeSchemas/StatementLineItemFindManyArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StatementLineItemSelectSchema: z.ZodType<Prisma.StatementLineItemSelect> = z
  .object({
    id: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    parentLineItemId: z.boolean().optional(),
    name: z.boolean().optional(),
    value: z.boolean().optional(),
    accountId: z.boolean().optional(),
    category: z.union([z.boolean(), z.lazy(() => StatementCategoryArgsSchema)]).optional(),
    parentLineItem: z.union([z.boolean(), z.lazy(() => StatementLineItemArgsSchema)]).optional(),
    childLineItems: z
      .union([z.boolean(), z.lazy(() => StatementLineItemFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StatementLineItemCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const StatementLineItemDeleteArgsSchema: z.ZodType<Prisma.StatementLineItemDeleteArgs> = z
  .object({
    select: StatementLineItemSelectSchema.optional(),
    include: z.lazy(() => StatementLineItemIncludeSchema).optional(),
    where: StatementLineItemWhereUniqueInputSchema,
  })
  .strict();

export default StatementLineItemDeleteArgsSchema;

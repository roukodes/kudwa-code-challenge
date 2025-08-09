import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemIncludeSchema } from '../inputTypeSchemas/StatementLineItemIncludeSchema';
import { StatementLineItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/StatementLineItemOrderByWithRelationInputSchema';
import { StatementLineItemScalarFieldEnumSchema } from '../inputTypeSchemas/StatementLineItemScalarFieldEnumSchema';
import { StatementLineItemWhereInputSchema } from '../inputTypeSchemas/StatementLineItemWhereInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from '../inputTypeSchemas/StatementLineItemWhereUniqueInputSchema';
import { StatementCategoryArgsSchema } from '../outputTypeSchemas/StatementCategoryArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';
import { StatementLineItemCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementLineItemCountOutputTypeArgsSchema';
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

export const StatementLineItemFindManyArgsSchema: z.ZodType<Prisma.StatementLineItemFindManyArgs> =
  z
    .object({
      select: StatementLineItemSelectSchema.optional(),
      include: z.lazy(() => StatementLineItemIncludeSchema).optional(),
      where: StatementLineItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StatementLineItemOrderByWithRelationInputSchema.array(),
          StatementLineItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StatementLineItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          StatementLineItemScalarFieldEnumSchema,
          StatementLineItemScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default StatementLineItemFindManyArgsSchema;

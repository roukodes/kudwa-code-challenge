import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryIncludeSchema } from '../inputTypeSchemas/StatementCategoryIncludeSchema';
import { StatementCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/StatementCategoryOrderByWithRelationInputSchema';
import { StatementCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/StatementCategoryScalarFieldEnumSchema';
import { StatementCategoryWhereInputSchema } from '../inputTypeSchemas/StatementCategoryWhereInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/StatementCategoryWhereUniqueInputSchema';
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

export const StatementCategoryFindManyArgsSchema: z.ZodType<Prisma.StatementCategoryFindManyArgs> =
  z
    .object({
      select: StatementCategorySelectSchema.optional(),
      include: z.lazy(() => StatementCategoryIncludeSchema).optional(),
      where: StatementCategoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          StatementCategoryOrderByWithRelationInputSchema.array(),
          StatementCategoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StatementCategoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          StatementCategoryScalarFieldEnumSchema,
          StatementCategoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default StatementCategoryFindManyArgsSchema;

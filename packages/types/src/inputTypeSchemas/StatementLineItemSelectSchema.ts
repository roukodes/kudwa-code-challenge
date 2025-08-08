import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingFindManyArgsSchema } from '../outputTypeSchemas/AccountMappingFindManyArgsSchema';
import { StatementCategoryArgsSchema } from '../outputTypeSchemas/StatementCategoryArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';
import { StatementLineItemCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementLineItemCountOutputTypeArgsSchema';
import { StatementLineItemFindManyArgsSchema } from '../outputTypeSchemas/StatementLineItemFindManyArgsSchema';

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
    AccountMapping: z
      .union([z.boolean(), z.lazy(() => AccountMappingFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StatementLineItemCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default StatementLineItemSelectSchema;

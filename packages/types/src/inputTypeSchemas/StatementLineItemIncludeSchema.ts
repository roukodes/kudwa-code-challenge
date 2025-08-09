import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryArgsSchema } from '../outputTypeSchemas/StatementCategoryArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';
import { StatementLineItemCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementLineItemCountOutputTypeArgsSchema';
import { StatementLineItemFindManyArgsSchema } from '../outputTypeSchemas/StatementLineItemFindManyArgsSchema';

export const StatementLineItemIncludeSchema: z.ZodType<Prisma.StatementLineItemInclude> = z
  .object({
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

export default StatementLineItemIncludeSchema;

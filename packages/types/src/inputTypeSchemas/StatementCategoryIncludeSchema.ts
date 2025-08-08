import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementArgsSchema } from '../outputTypeSchemas/StatementArgsSchema';
import { StatementCategoryCountOutputTypeArgsSchema } from '../outputTypeSchemas/StatementCategoryCountOutputTypeArgsSchema';
import { StatementLineItemFindManyArgsSchema } from '../outputTypeSchemas/StatementLineItemFindManyArgsSchema';

export const StatementCategoryIncludeSchema: z.ZodType<Prisma.StatementCategoryInclude> = z
  .object({
    statement: z.union([z.boolean(), z.lazy(() => StatementArgsSchema)]).optional(),
    lineItems: z.union([z.boolean(), z.lazy(() => StatementLineItemFindManyArgsSchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StatementCategoryCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default StatementCategoryIncludeSchema;

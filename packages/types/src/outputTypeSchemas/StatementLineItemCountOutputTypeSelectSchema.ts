import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementLineItemCountOutputTypeSelectSchema: z.ZodType<Prisma.StatementLineItemCountOutputTypeSelect> =
  z
    .object({
      childLineItems: z.boolean().optional(),
    })
    .strict();

export default StatementLineItemCountOutputTypeSelectSchema;

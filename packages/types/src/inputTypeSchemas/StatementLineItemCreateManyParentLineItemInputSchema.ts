import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementLineItemCreateManyParentLineItemInputSchema: z.ZodType<Prisma.StatementLineItemCreateManyParentLineItemInput> =
  z
    .object({
      id: z.number().int().optional(),
      categoryId: z.number().int(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
    })
    .strict();

export default StatementLineItemCreateManyParentLineItemInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementLineItemCreateManyCategoryInputSchema: z.ZodType<Prisma.StatementLineItemCreateManyCategoryInput> =
  z
    .object({
      id: z.number().int().optional(),
      parentLineItemId: z.number().int().optional().nullable(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
    })
    .strict();

export default StatementLineItemCreateManyCategoryInputSchema;

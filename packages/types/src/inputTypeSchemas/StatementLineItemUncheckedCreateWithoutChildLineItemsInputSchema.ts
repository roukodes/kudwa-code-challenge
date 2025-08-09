import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedCreateWithoutChildLineItemsInput> =
  z
    .object({
      id: z.number().int().optional(),
      categoryId: z.number().int(),
      parentLineItemId: z.number().int().optional().nullable(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
    })
    .strict();

export default StatementLineItemUncheckedCreateWithoutChildLineItemsInputSchema;

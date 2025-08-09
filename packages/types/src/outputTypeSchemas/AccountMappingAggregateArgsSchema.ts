import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingOrderByWithRelationInputSchema } from '../inputTypeSchemas/AccountMappingOrderByWithRelationInputSchema';
import { AccountMappingWhereInputSchema } from '../inputTypeSchemas/AccountMappingWhereInputSchema';
import { AccountMappingWhereUniqueInputSchema } from '../inputTypeSchemas/AccountMappingWhereUniqueInputSchema';

export const AccountMappingAggregateArgsSchema: z.ZodType<Prisma.AccountMappingAggregateArgs> = z
  .object({
    where: AccountMappingWhereInputSchema.optional(),
    orderBy: z
      .union([
        AccountMappingOrderByWithRelationInputSchema.array(),
        AccountMappingOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: AccountMappingWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default AccountMappingAggregateArgsSchema;

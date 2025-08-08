import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AccountMappingOrderByWithAggregationInputSchema';
import { AccountMappingScalarFieldEnumSchema } from '../inputTypeSchemas/AccountMappingScalarFieldEnumSchema';
import { AccountMappingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AccountMappingScalarWhereWithAggregatesInputSchema';
import { AccountMappingWhereInputSchema } from '../inputTypeSchemas/AccountMappingWhereInputSchema';

export const AccountMappingGroupByArgsSchema: z.ZodType<Prisma.AccountMappingGroupByArgs> = z
  .object({
    where: AccountMappingWhereInputSchema.optional(),
    orderBy: z
      .union([
        AccountMappingOrderByWithAggregationInputSchema.array(),
        AccountMappingOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AccountMappingScalarFieldEnumSchema.array(),
    having: AccountMappingScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default AccountMappingGroupByArgsSchema;

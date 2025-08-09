import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingIncludeSchema } from '../inputTypeSchemas/AccountMappingIncludeSchema';
import { AccountMappingOrderByWithRelationInputSchema } from '../inputTypeSchemas/AccountMappingOrderByWithRelationInputSchema';
import { AccountMappingScalarFieldEnumSchema } from '../inputTypeSchemas/AccountMappingScalarFieldEnumSchema';
import { AccountMappingWhereInputSchema } from '../inputTypeSchemas/AccountMappingWhereInputSchema';
import { AccountMappingWhereUniqueInputSchema } from '../inputTypeSchemas/AccountMappingWhereUniqueInputSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
import { StatementLineItemArgsSchema } from '../outputTypeSchemas/StatementLineItemArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountMappingSelectSchema: z.ZodType<Prisma.AccountMappingSelect> = z
  .object({
    id: z.boolean().optional(),
    statementLineItemId: z.boolean().optional(),
    reportAccountId: z.boolean().optional(),
    notes: z.boolean().optional(),
    statementLineItem: z.union([z.boolean(), z.lazy(() => StatementLineItemArgsSchema)]).optional(),
    reportAccount: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
  })
  .strict();

export const AccountMappingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountMappingFindFirstOrThrowArgs> =
  z
    .object({
      select: AccountMappingSelectSchema.optional(),
      include: z.lazy(() => AccountMappingIncludeSchema).optional(),
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
      distinct: z
        .union([AccountMappingScalarFieldEnumSchema, AccountMappingScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export default AccountMappingFindFirstOrThrowArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateInputSchema } from '../inputTypeSchemas/AccountMappingCreateInputSchema';
import { AccountMappingIncludeSchema } from '../inputTypeSchemas/AccountMappingIncludeSchema';
import { AccountMappingUncheckedCreateInputSchema } from '../inputTypeSchemas/AccountMappingUncheckedCreateInputSchema';
import { AccountMappingUncheckedUpdateInputSchema } from '../inputTypeSchemas/AccountMappingUncheckedUpdateInputSchema';
import { AccountMappingUpdateInputSchema } from '../inputTypeSchemas/AccountMappingUpdateInputSchema';
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

export const AccountMappingUpsertArgsSchema: z.ZodType<Prisma.AccountMappingUpsertArgs> = z
  .object({
    select: AccountMappingSelectSchema.optional(),
    include: z.lazy(() => AccountMappingIncludeSchema).optional(),
    where: AccountMappingWhereUniqueInputSchema,
    create: z.union([AccountMappingCreateInputSchema, AccountMappingUncheckedCreateInputSchema]),
    update: z.union([AccountMappingUpdateInputSchema, AccountMappingUncheckedUpdateInputSchema]),
  })
  .strict();

export default AccountMappingUpsertArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountIncludeSchema } from '../inputTypeSchemas/ReportAccountIncludeSchema';
import { ReportAccountOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportAccountOrderByWithRelationInputSchema';
import { ReportAccountScalarFieldEnumSchema } from '../inputTypeSchemas/ReportAccountScalarFieldEnumSchema';
import { ReportAccountWhereInputSchema } from '../inputTypeSchemas/ReportAccountWhereInputSchema';
import { ReportAccountWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccountWhereUniqueInputSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
import { ReportAccountCountOutputTypeArgsSchema } from '../outputTypeSchemas/ReportAccountCountOutputTypeArgsSchema';
import { ReportAccountValueFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountValueFindManyArgsSchema';
import { ReportHeaderArgsSchema } from '../outputTypeSchemas/ReportHeaderArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportAccountSelectSchema: z.ZodType<Prisma.ReportAccountSelect> = z
  .object({
    id: z.boolean().optional(),
    reportId: z.boolean().optional(),
    accountName: z.boolean().optional(),
    parentAccountId: z.boolean().optional(),
    type: z.boolean().optional(),
    report: z.union([z.boolean(), z.lazy(() => ReportHeaderArgsSchema)]).optional(),
    parentAccount: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
    childAccounts: z.union([z.boolean(), z.lazy(() => ReportAccountFindManyArgsSchema)]).optional(),
    values: z.union([z.boolean(), z.lazy(() => ReportAccountValueFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ReportAccountCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const ReportAccountFindManyArgsSchema: z.ZodType<Prisma.ReportAccountFindManyArgs> = z
  .object({
    select: ReportAccountSelectSchema.optional(),
    include: z.lazy(() => ReportAccountIncludeSchema).optional(),
    where: ReportAccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        ReportAccountOrderByWithRelationInputSchema.array(),
        ReportAccountOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ReportAccountWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([ReportAccountScalarFieldEnumSchema, ReportAccountScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default ReportAccountFindManyArgsSchema;

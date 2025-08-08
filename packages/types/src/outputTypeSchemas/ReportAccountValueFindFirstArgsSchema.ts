import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueIncludeSchema } from '../inputTypeSchemas/ReportAccountValueIncludeSchema';
import { ReportAccountValueOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportAccountValueOrderByWithRelationInputSchema';
import { ReportAccountValueScalarFieldEnumSchema } from '../inputTypeSchemas/ReportAccountValueScalarFieldEnumSchema';
import { ReportAccountValueWhereInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereUniqueInputSchema';
import { PeriodArgsSchema } from '../outputTypeSchemas/PeriodArgsSchema';
import { ReportAccountArgsSchema } from '../outputTypeSchemas/ReportAccountArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportAccountValueSelectSchema: z.ZodType<Prisma.ReportAccountValueSelect> = z
  .object({
    id: z.boolean().optional(),
    accountId: z.boolean().optional(),
    periodId: z.boolean().optional(),
    amount: z.boolean().optional(),
    account: z.union([z.boolean(), z.lazy(() => ReportAccountArgsSchema)]).optional(),
    period: z.union([z.boolean(), z.lazy(() => PeriodArgsSchema)]).optional(),
  })
  .strict();

export const ReportAccountValueFindFirstArgsSchema: z.ZodType<Prisma.ReportAccountValueFindFirstArgs> =
  z
    .object({
      select: ReportAccountValueSelectSchema.optional(),
      include: z.lazy(() => ReportAccountValueIncludeSchema).optional(),
      where: ReportAccountValueWhereInputSchema.optional(),
      orderBy: z
        .union([
          ReportAccountValueOrderByWithRelationInputSchema.array(),
          ReportAccountValueOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ReportAccountValueWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ReportAccountValueScalarFieldEnumSchema,
          ReportAccountValueScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountValueFindFirstArgsSchema;

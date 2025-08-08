import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodIncludeSchema } from '../inputTypeSchemas/PeriodIncludeSchema';
import { PeriodOrderByWithRelationInputSchema } from '../inputTypeSchemas/PeriodOrderByWithRelationInputSchema';
import { PeriodScalarFieldEnumSchema } from '../inputTypeSchemas/PeriodScalarFieldEnumSchema';
import { PeriodWhereInputSchema } from '../inputTypeSchemas/PeriodWhereInputSchema';
import { PeriodWhereUniqueInputSchema } from '../inputTypeSchemas/PeriodWhereUniqueInputSchema';
import { PeriodCountOutputTypeArgsSchema } from '../outputTypeSchemas/PeriodCountOutputTypeArgsSchema';
import { ReportAccountValueFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountValueFindManyArgsSchema';
import { StatementFindManyArgsSchema } from '../outputTypeSchemas/StatementFindManyArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PeriodSelectSchema: z.ZodType<Prisma.PeriodSelect> = z
  .object({
    id: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    label: z.boolean().optional(),
    statements: z.union([z.boolean(), z.lazy(() => StatementFindManyArgsSchema)]).optional(),
    reportValues: z
      .union([z.boolean(), z.lazy(() => ReportAccountValueFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => PeriodCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export const PeriodFindManyArgsSchema: z.ZodType<Prisma.PeriodFindManyArgs> = z
  .object({
    select: PeriodSelectSchema.optional(),
    include: z.lazy(() => PeriodIncludeSchema).optional(),
    where: PeriodWhereInputSchema.optional(),
    orderBy: z
      .union([PeriodOrderByWithRelationInputSchema.array(), PeriodOrderByWithRelationInputSchema])
      .optional(),
    cursor: PeriodWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PeriodScalarFieldEnumSchema, PeriodScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export default PeriodFindManyArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodIncludeSchema } from '../inputTypeSchemas/PeriodIncludeSchema';
import { PeriodUncheckedUpdateInputSchema } from '../inputTypeSchemas/PeriodUncheckedUpdateInputSchema';
import { PeriodUpdateInputSchema } from '../inputTypeSchemas/PeriodUpdateInputSchema';
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

export const PeriodUpdateArgsSchema: z.ZodType<Prisma.PeriodUpdateArgs> = z
  .object({
    select: PeriodSelectSchema.optional(),
    include: z.lazy(() => PeriodIncludeSchema).optional(),
    data: z.union([PeriodUpdateInputSchema, PeriodUncheckedUpdateInputSchema]),
    where: PeriodWhereUniqueInputSchema,
  })
  .strict();

export default PeriodUpdateArgsSchema;

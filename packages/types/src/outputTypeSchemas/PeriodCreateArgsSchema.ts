import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateInputSchema } from '../inputTypeSchemas/PeriodCreateInputSchema';
import { PeriodIncludeSchema } from '../inputTypeSchemas/PeriodIncludeSchema';
import { PeriodUncheckedCreateInputSchema } from '../inputTypeSchemas/PeriodUncheckedCreateInputSchema';
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

export const PeriodCreateArgsSchema: z.ZodType<Prisma.PeriodCreateArgs> = z
  .object({
    select: PeriodSelectSchema.optional(),
    include: z.lazy(() => PeriodIncludeSchema).optional(),
    data: z.union([PeriodCreateInputSchema, PeriodUncheckedCreateInputSchema]),
  })
  .strict();

export default PeriodCreateArgsSchema;

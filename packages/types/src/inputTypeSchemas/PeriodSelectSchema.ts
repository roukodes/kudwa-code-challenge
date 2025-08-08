import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCountOutputTypeArgsSchema } from '../outputTypeSchemas/PeriodCountOutputTypeArgsSchema';
import { ReportAccountValueFindManyArgsSchema } from '../outputTypeSchemas/ReportAccountValueFindManyArgsSchema';
import { StatementFindManyArgsSchema } from '../outputTypeSchemas/StatementFindManyArgsSchema';

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

export default PeriodSelectSchema;

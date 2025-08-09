import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueIncludeSchema } from '../inputTypeSchemas/ReportAccountValueIncludeSchema';
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

export const ReportAccountValueDeleteArgsSchema: z.ZodType<Prisma.ReportAccountValueDeleteArgs> = z
  .object({
    select: ReportAccountValueSelectSchema.optional(),
    include: z.lazy(() => ReportAccountValueIncludeSchema).optional(),
    where: ReportAccountValueWhereUniqueInputSchema,
  })
  .strict();

export default ReportAccountValueDeleteArgsSchema;

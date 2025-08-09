import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateManyInputSchema } from '../inputTypeSchemas/ReportHeaderCreateManyInputSchema';

export const ReportHeaderCreateManyArgsSchema: z.ZodType<Prisma.ReportHeaderCreateManyArgs> = z
  .object({
    data: z.union([ReportHeaderCreateManyInputSchema, ReportHeaderCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export default ReportHeaderCreateManyArgsSchema;

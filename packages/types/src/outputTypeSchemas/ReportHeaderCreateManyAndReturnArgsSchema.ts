import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateManyInputSchema } from '../inputTypeSchemas/ReportHeaderCreateManyInputSchema';

export const ReportHeaderCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReportHeaderCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([ReportHeaderCreateManyInputSchema, ReportHeaderCreateManyInputSchema.array()]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportHeaderCreateManyAndReturnArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyInputSchema } from '../inputTypeSchemas/ReportAccountCreateManyInputSchema';

export const ReportAccountCreateManyArgsSchema: z.ZodType<Prisma.ReportAccountCreateManyArgs> = z
  .object({
    data: z.union([ReportAccountCreateManyInputSchema, ReportAccountCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export default ReportAccountCreateManyArgsSchema;

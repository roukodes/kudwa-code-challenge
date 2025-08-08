import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyInputSchema } from '../inputTypeSchemas/ReportAccountValueCreateManyInputSchema';

export const ReportAccountValueCreateManyArgsSchema: z.ZodType<Prisma.ReportAccountValueCreateManyArgs> =
  z
    .object({
      data: z.union([
        ReportAccountValueCreateManyInputSchema,
        ReportAccountValueCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportAccountValueCreateManyArgsSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateManyInputSchema } from '../inputTypeSchemas/ReportAccountValueCreateManyInputSchema';

export const ReportAccountValueCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReportAccountValueCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ReportAccountValueCreateManyInputSchema,
        ReportAccountValueCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default ReportAccountValueCreateManyAndReturnArgsSchema;

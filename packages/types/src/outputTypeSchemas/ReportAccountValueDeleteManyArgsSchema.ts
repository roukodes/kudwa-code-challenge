import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueWhereInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereInputSchema';

export const ReportAccountValueDeleteManyArgsSchema: z.ZodType<Prisma.ReportAccountValueDeleteManyArgs> =
  z
    .object({
      where: ReportAccountValueWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ReportAccountValueDeleteManyArgsSchema;

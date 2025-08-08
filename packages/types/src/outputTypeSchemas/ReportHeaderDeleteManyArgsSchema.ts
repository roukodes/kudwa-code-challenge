import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderWhereInputSchema } from '../inputTypeSchemas/ReportHeaderWhereInputSchema';

export const ReportHeaderDeleteManyArgsSchema: z.ZodType<Prisma.ReportHeaderDeleteManyArgs> = z
  .object({
    where: ReportHeaderWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export default ReportHeaderDeleteManyArgsSchema;

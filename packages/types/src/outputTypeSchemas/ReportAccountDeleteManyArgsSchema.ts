import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountWhereInputSchema } from '../inputTypeSchemas/ReportAccountWhereInputSchema';

export const ReportAccountDeleteManyArgsSchema: z.ZodType<Prisma.ReportAccountDeleteManyArgs> = z
  .object({
    where: ReportAccountWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export default ReportAccountDeleteManyArgsSchema;

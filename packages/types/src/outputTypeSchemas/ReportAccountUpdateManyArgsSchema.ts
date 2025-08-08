import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportAccountUncheckedUpdateManyInputSchema';
import { ReportAccountUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportAccountUpdateManyMutationInputSchema';
import { ReportAccountWhereInputSchema } from '../inputTypeSchemas/ReportAccountWhereInputSchema';

export const ReportAccountUpdateManyArgsSchema: z.ZodType<Prisma.ReportAccountUpdateManyArgs> = z
  .object({
    data: z.union([
      ReportAccountUpdateManyMutationInputSchema,
      ReportAccountUncheckedUpdateManyInputSchema,
    ]),
    where: ReportAccountWhereInputSchema.optional(),
    limit: z.number().optional(),
  })
  .strict();

export default ReportAccountUpdateManyArgsSchema;

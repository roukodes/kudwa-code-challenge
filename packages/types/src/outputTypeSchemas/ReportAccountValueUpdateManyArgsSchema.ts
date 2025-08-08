import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportAccountValueUncheckedUpdateManyInputSchema';
import { ReportAccountValueUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportAccountValueUpdateManyMutationInputSchema';
import { ReportAccountValueWhereInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereInputSchema';

export const ReportAccountValueUpdateManyArgsSchema: z.ZodType<Prisma.ReportAccountValueUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ReportAccountValueUpdateManyMutationInputSchema,
        ReportAccountValueUncheckedUpdateManyInputSchema,
      ]),
      where: ReportAccountValueWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ReportAccountValueUpdateManyArgsSchema;

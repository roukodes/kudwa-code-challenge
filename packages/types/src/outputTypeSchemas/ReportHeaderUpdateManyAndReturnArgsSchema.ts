import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReportHeaderUncheckedUpdateManyInputSchema';
import { ReportHeaderUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReportHeaderUpdateManyMutationInputSchema';
import { ReportHeaderWhereInputSchema } from '../inputTypeSchemas/ReportHeaderWhereInputSchema';

export const ReportHeaderUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ReportHeaderUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ReportHeaderUpdateManyMutationInputSchema,
        ReportHeaderUncheckedUpdateManyInputSchema,
      ]),
      where: ReportHeaderWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default ReportHeaderUpdateManyAndReturnArgsSchema;

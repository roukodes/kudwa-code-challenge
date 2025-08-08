import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportAccountValueOrderByWithRelationInputSchema';
import { ReportAccountValueWhereInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueAggregateArgsSchema: z.ZodType<Prisma.ReportAccountValueAggregateArgs> =
  z
    .object({
      where: ReportAccountValueWhereInputSchema.optional(),
      orderBy: z
        .union([
          ReportAccountValueOrderByWithRelationInputSchema.array(),
          ReportAccountValueOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ReportAccountValueWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default ReportAccountValueAggregateArgsSchema;

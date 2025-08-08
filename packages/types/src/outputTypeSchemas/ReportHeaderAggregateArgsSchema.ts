import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportHeaderOrderByWithRelationInputSchema';
import { ReportHeaderWhereInputSchema } from '../inputTypeSchemas/ReportHeaderWhereInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from '../inputTypeSchemas/ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderAggregateArgsSchema: z.ZodType<Prisma.ReportHeaderAggregateArgs> = z
  .object({
    where: ReportHeaderWhereInputSchema.optional(),
    orderBy: z
      .union([
        ReportHeaderOrderByWithRelationInputSchema.array(),
        ReportHeaderOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ReportHeaderWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default ReportHeaderAggregateArgsSchema;

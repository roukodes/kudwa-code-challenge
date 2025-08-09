import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportAccountOrderByWithRelationInputSchema';
import { ReportAccountWhereInputSchema } from '../inputTypeSchemas/ReportAccountWhereInputSchema';
import { ReportAccountWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccountWhereUniqueInputSchema';

export const ReportAccountAggregateArgsSchema: z.ZodType<Prisma.ReportAccountAggregateArgs> = z
  .object({
    where: ReportAccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        ReportAccountOrderByWithRelationInputSchema.array(),
        ReportAccountOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: ReportAccountWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default ReportAccountAggregateArgsSchema;

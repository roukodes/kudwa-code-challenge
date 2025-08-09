import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportHeaderOrderByWithAggregationInputSchema';
import { ReportHeaderScalarFieldEnumSchema } from '../inputTypeSchemas/ReportHeaderScalarFieldEnumSchema';
import { ReportHeaderScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportHeaderScalarWhereWithAggregatesInputSchema';
import { ReportHeaderWhereInputSchema } from '../inputTypeSchemas/ReportHeaderWhereInputSchema';

export const ReportHeaderGroupByArgsSchema: z.ZodType<Prisma.ReportHeaderGroupByArgs> = z
  .object({
    where: ReportHeaderWhereInputSchema.optional(),
    orderBy: z
      .union([
        ReportHeaderOrderByWithAggregationInputSchema.array(),
        ReportHeaderOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ReportHeaderScalarFieldEnumSchema.array(),
    having: ReportHeaderScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default ReportHeaderGroupByArgsSchema;

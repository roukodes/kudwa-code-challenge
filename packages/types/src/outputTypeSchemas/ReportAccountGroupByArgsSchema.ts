import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportAccountOrderByWithAggregationInputSchema';
import { ReportAccountScalarFieldEnumSchema } from '../inputTypeSchemas/ReportAccountScalarFieldEnumSchema';
import { ReportAccountScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportAccountScalarWhereWithAggregatesInputSchema';
import { ReportAccountWhereInputSchema } from '../inputTypeSchemas/ReportAccountWhereInputSchema';

export const ReportAccountGroupByArgsSchema: z.ZodType<Prisma.ReportAccountGroupByArgs> = z
  .object({
    where: ReportAccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        ReportAccountOrderByWithAggregationInputSchema.array(),
        ReportAccountOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ReportAccountScalarFieldEnumSchema.array(),
    having: ReportAccountScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default ReportAccountGroupByArgsSchema;

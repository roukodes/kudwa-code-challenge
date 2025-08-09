import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReportAccountValueOrderByWithAggregationInputSchema';
import { ReportAccountValueScalarFieldEnumSchema } from '../inputTypeSchemas/ReportAccountValueScalarFieldEnumSchema';
import { ReportAccountValueScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReportAccountValueScalarWhereWithAggregatesInputSchema';
import { ReportAccountValueWhereInputSchema } from '../inputTypeSchemas/ReportAccountValueWhereInputSchema';

export const ReportAccountValueGroupByArgsSchema: z.ZodType<Prisma.ReportAccountValueGroupByArgs> =
  z
    .object({
      where: ReportAccountValueWhereInputSchema.optional(),
      orderBy: z
        .union([
          ReportAccountValueOrderByWithAggregationInputSchema.array(),
          ReportAccountValueOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ReportAccountValueScalarFieldEnumSchema.array(),
      having: ReportAccountValueScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default ReportAccountValueGroupByArgsSchema;

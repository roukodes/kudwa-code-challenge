import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CompanyOrderByWithAggregationInputSchema';
import { CompanyScalarFieldEnumSchema } from '../inputTypeSchemas/CompanyScalarFieldEnumSchema';
import { CompanyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CompanyScalarWhereWithAggregatesInputSchema';
import { CompanyWhereInputSchema } from '../inputTypeSchemas/CompanyWhereInputSchema';

export const CompanyGroupByArgsSchema: z.ZodType<Prisma.CompanyGroupByArgs> = z
  .object({
    where: CompanyWhereInputSchema.optional(),
    orderBy: z
      .union([
        CompanyOrderByWithAggregationInputSchema.array(),
        CompanyOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: CompanyScalarFieldEnumSchema.array(),
    having: CompanyScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default CompanyGroupByArgsSchema;

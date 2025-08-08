import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompanyOrderByWithRelationInputSchema';
import { CompanyWhereInputSchema } from '../inputTypeSchemas/CompanyWhereInputSchema';
import { CompanyWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyWhereUniqueInputSchema';

export const CompanyAggregateArgsSchema: z.ZodType<Prisma.CompanyAggregateArgs> = z
  .object({
    where: CompanyWhereInputSchema.optional(),
    orderBy: z
      .union([CompanyOrderByWithRelationInputSchema.array(), CompanyOrderByWithRelationInputSchema])
      .optional(),
    cursor: CompanyWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default CompanyAggregateArgsSchema;

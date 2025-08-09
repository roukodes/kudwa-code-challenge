import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateManyInputSchema } from '../inputTypeSchemas/CompanyCreateManyInputSchema';

export const CompanyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([CompanyCreateManyInputSchema, CompanyCreateManyInputSchema.array()]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default CompanyCreateManyAndReturnArgsSchema;

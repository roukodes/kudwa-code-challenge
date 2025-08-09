import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompanyUncheckedUpdateManyInputSchema';
import { CompanyUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompanyUpdateManyMutationInputSchema';
import { CompanyWhereInputSchema } from '../inputTypeSchemas/CompanyWhereInputSchema';

export const CompanyUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyUpdateManyAndReturnArgs> =
  z
    .object({
      data: z.union([CompanyUpdateManyMutationInputSchema, CompanyUncheckedUpdateManyInputSchema]),
      where: CompanyWhereInputSchema.optional(),
      limit: z.number().optional(),
    })
    .strict();

export default CompanyUpdateManyAndReturnArgsSchema;

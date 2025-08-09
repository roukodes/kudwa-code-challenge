import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementUncheckedCreateNestedManyWithoutCompanyInputSchema } from './StatementUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateWithoutReportsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutReportsInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string().optional().nullable(),
      currency: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
      statements: z
        .lazy(() => StatementUncheckedCreateNestedManyWithoutCompanyInputSchema)
        .optional(),
    })
    .strict();

export default CompanyUncheckedCreateWithoutReportsInputSchema;

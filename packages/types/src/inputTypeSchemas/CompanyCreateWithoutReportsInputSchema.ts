import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateNestedManyWithoutCompanyInputSchema } from './StatementCreateNestedManyWithoutCompanyInputSchema';

export const CompanyCreateWithoutReportsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutReportsInput> =
  z
    .object({
      name: z.string().optional().nullable(),
      currency: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
      statements: z.lazy(() => StatementCreateNestedManyWithoutCompanyInputSchema).optional(),
    })
    .strict();

export default CompanyCreateWithoutReportsInputSchema;

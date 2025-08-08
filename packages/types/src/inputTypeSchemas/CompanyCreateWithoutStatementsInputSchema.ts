import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateNestedManyWithoutCompanyInputSchema } from './ReportHeaderCreateNestedManyWithoutCompanyInputSchema';

export const CompanyCreateWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutStatementsInput> =
  z
    .object({
      name: z.string().optional().nullable(),
      currency: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
      reports: z.lazy(() => ReportHeaderCreateNestedManyWithoutCompanyInputSchema).optional(),
    })
    .strict();

export default CompanyCreateWithoutStatementsInputSchema;

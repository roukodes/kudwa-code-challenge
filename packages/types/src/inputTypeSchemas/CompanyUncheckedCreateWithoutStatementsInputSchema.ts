import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderUncheckedCreateNestedManyWithoutCompanyInputSchema } from './ReportHeaderUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutStatementsInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string().optional().nullable(),
      currency: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
      reports: z
        .lazy(() => ReportHeaderUncheckedCreateNestedManyWithoutCompanyInputSchema)
        .optional(),
    })
    .strict();

export default CompanyUncheckedCreateWithoutStatementsInputSchema;

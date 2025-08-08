import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderUncheckedCreateNestedManyWithoutCompanyInputSchema } from './ReportHeaderUncheckedCreateNestedManyWithoutCompanyInputSchema';
import { StatementUncheckedCreateNestedManyWithoutCompanyInputSchema } from './StatementUncheckedCreateNestedManyWithoutCompanyInputSchema';

export const CompanyUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = z
  .object({
    id: z.number().int().optional(),
    name: z.string().optional().nullable(),
    currency: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
    statements: z
      .lazy(() => StatementUncheckedCreateNestedManyWithoutCompanyInputSchema)
      .optional(),
    reports: z
      .lazy(() => ReportHeaderUncheckedCreateNestedManyWithoutCompanyInputSchema)
      .optional(),
  })
  .strict();

export default CompanyUncheckedCreateInputSchema;

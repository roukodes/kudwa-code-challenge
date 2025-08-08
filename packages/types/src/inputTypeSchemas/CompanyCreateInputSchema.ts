import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateNestedManyWithoutCompanyInputSchema } from './ReportHeaderCreateNestedManyWithoutCompanyInputSchema';
import { StatementCreateNestedManyWithoutCompanyInputSchema } from './StatementCreateNestedManyWithoutCompanyInputSchema';

export const CompanyCreateInputSchema: z.ZodType<Prisma.CompanyCreateInput> = z
  .object({
    name: z.string().optional().nullable(),
    currency: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
    statements: z.lazy(() => StatementCreateNestedManyWithoutCompanyInputSchema).optional(),
    reports: z.lazy(() => ReportHeaderCreateNestedManyWithoutCompanyInputSchema).optional(),
  })
  .strict();

export default CompanyCreateInputSchema;

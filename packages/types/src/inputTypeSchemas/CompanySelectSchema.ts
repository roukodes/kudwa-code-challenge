import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCountOutputTypeArgsSchema } from '../outputTypeSchemas/CompanyCountOutputTypeArgsSchema';
import { ReportHeaderFindManyArgsSchema } from '../outputTypeSchemas/ReportHeaderFindManyArgsSchema';
import { StatementFindManyArgsSchema } from '../outputTypeSchemas/StatementFindManyArgsSchema';

export const CompanySelectSchema: z.ZodType<Prisma.CompanySelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    currency: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    statements: z.union([z.boolean(), z.lazy(() => StatementFindManyArgsSchema)]).optional(),
    reports: z.union([z.boolean(), z.lazy(() => ReportHeaderFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
  })
  .strict();

export default CompanySelectSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyIncludeSchema } from '../inputTypeSchemas/CompanyIncludeSchema';
import { CompanyWhereUniqueInputSchema } from '../inputTypeSchemas/CompanyWhereUniqueInputSchema';
import { CompanyCountOutputTypeArgsSchema } from '../outputTypeSchemas/CompanyCountOutputTypeArgsSchema';
import { ReportHeaderFindManyArgsSchema } from '../outputTypeSchemas/ReportHeaderFindManyArgsSchema';
import { StatementFindManyArgsSchema } from '../outputTypeSchemas/StatementFindManyArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const CompanyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindUniqueOrThrowArgs> = z
  .object({
    select: CompanySelectSchema.optional(),
    include: z.lazy(() => CompanyIncludeSchema).optional(),
    where: CompanyWhereUniqueInputSchema,
  })
  .strict();

export default CompanyFindUniqueOrThrowArgsSchema;

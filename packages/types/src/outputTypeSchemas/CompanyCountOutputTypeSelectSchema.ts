import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const CompanyCountOutputTypeSelectSchema: z.ZodType<Prisma.CompanyCountOutputTypeSelect> = z
  .object({
    statements: z.boolean().optional(),
    reports: z.boolean().optional(),
  })
  .strict();

export default CompanyCountOutputTypeSelectSchema;

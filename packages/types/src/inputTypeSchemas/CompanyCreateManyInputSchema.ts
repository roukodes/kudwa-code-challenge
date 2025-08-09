import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const CompanyCreateManyInputSchema: z.ZodType<Prisma.CompanyCreateManyInput> = z
  .object({
    id: z.number().int().optional(),
    name: z.string().optional().nullable(),
    currency: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
  })
  .strict();

export default CompanyCreateManyInputSchema;

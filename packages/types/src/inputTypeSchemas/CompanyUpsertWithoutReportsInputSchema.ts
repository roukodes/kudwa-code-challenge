import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateWithoutReportsInputSchema } from './CompanyCreateWithoutReportsInputSchema';
import { CompanyUncheckedCreateWithoutReportsInputSchema } from './CompanyUncheckedCreateWithoutReportsInputSchema';
import { CompanyUncheckedUpdateWithoutReportsInputSchema } from './CompanyUncheckedUpdateWithoutReportsInputSchema';
import { CompanyUpdateWithoutReportsInputSchema } from './CompanyUpdateWithoutReportsInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpsertWithoutReportsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutReportsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => CompanyUpdateWithoutReportsInputSchema),
        z.lazy(() => CompanyUncheckedUpdateWithoutReportsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CompanyCreateWithoutReportsInputSchema),
        z.lazy(() => CompanyUncheckedCreateWithoutReportsInputSchema),
      ]),
      where: z.lazy(() => CompanyWhereInputSchema).optional(),
    })
    .strict();

export default CompanyUpsertWithoutReportsInputSchema;

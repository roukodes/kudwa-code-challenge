import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateWithoutStatementsInputSchema } from './CompanyCreateWithoutStatementsInputSchema';
import { CompanyUncheckedCreateWithoutStatementsInputSchema } from './CompanyUncheckedCreateWithoutStatementsInputSchema';
import { CompanyUncheckedUpdateWithoutStatementsInputSchema } from './CompanyUncheckedUpdateWithoutStatementsInputSchema';
import { CompanyUpdateWithoutStatementsInputSchema } from './CompanyUpdateWithoutStatementsInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpsertWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutStatementsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => CompanyUpdateWithoutStatementsInputSchema),
        z.lazy(() => CompanyUncheckedUpdateWithoutStatementsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CompanyCreateWithoutStatementsInputSchema),
        z.lazy(() => CompanyUncheckedCreateWithoutStatementsInputSchema),
      ]),
      where: z.lazy(() => CompanyWhereInputSchema).optional(),
    })
    .strict();

export default CompanyUpsertWithoutStatementsInputSchema;

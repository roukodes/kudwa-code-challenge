import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyUncheckedUpdateWithoutStatementsInputSchema } from './CompanyUncheckedUpdateWithoutStatementsInputSchema';
import { CompanyUpdateWithoutStatementsInputSchema } from './CompanyUpdateWithoutStatementsInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpdateToOneWithWhereWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutStatementsInput> =
  z
    .object({
      where: z.lazy(() => CompanyWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => CompanyUpdateWithoutStatementsInputSchema),
        z.lazy(() => CompanyUncheckedUpdateWithoutStatementsInputSchema),
      ]),
    })
    .strict();

export default CompanyUpdateToOneWithWhereWithoutStatementsInputSchema;

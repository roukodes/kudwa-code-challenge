import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateWithoutStatementsInputSchema } from './CompanyCreateWithoutStatementsInputSchema';
import { CompanyUncheckedCreateWithoutStatementsInputSchema } from './CompanyUncheckedCreateWithoutStatementsInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateOrConnectWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutStatementsInput> =
  z
    .object({
      where: z.lazy(() => CompanyWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CompanyCreateWithoutStatementsInputSchema),
        z.lazy(() => CompanyUncheckedCreateWithoutStatementsInputSchema),
      ]),
    })
    .strict();

export default CompanyCreateOrConnectWithoutStatementsInputSchema;

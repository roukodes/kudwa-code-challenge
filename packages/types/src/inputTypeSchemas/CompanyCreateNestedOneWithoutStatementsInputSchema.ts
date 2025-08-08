import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateOrConnectWithoutStatementsInputSchema } from './CompanyCreateOrConnectWithoutStatementsInputSchema';
import { CompanyCreateWithoutStatementsInputSchema } from './CompanyCreateWithoutStatementsInputSchema';
import { CompanyUncheckedCreateWithoutStatementsInputSchema } from './CompanyUncheckedCreateWithoutStatementsInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateNestedOneWithoutStatementsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutStatementsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CompanyCreateWithoutStatementsInputSchema),
          z.lazy(() => CompanyUncheckedCreateWithoutStatementsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutStatementsInputSchema).optional(),
      connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
    })
    .strict();

export default CompanyCreateNestedOneWithoutStatementsInputSchema;

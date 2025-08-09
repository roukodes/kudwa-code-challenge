import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateOrConnectWithoutStatementsInputSchema } from './CompanyCreateOrConnectWithoutStatementsInputSchema';
import { CompanyCreateWithoutStatementsInputSchema } from './CompanyCreateWithoutStatementsInputSchema';
import { CompanyUncheckedCreateWithoutStatementsInputSchema } from './CompanyUncheckedCreateWithoutStatementsInputSchema';
import { CompanyUncheckedUpdateWithoutStatementsInputSchema } from './CompanyUncheckedUpdateWithoutStatementsInputSchema';
import { CompanyUpdateToOneWithWhereWithoutStatementsInputSchema } from './CompanyUpdateToOneWithWhereWithoutStatementsInputSchema';
import { CompanyUpdateWithoutStatementsInputSchema } from './CompanyUpdateWithoutStatementsInputSchema';
import { CompanyUpsertWithoutStatementsInputSchema } from './CompanyUpsertWithoutStatementsInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyUpdateOneRequiredWithoutStatementsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutStatementsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CompanyCreateWithoutStatementsInputSchema),
          z.lazy(() => CompanyUncheckedCreateWithoutStatementsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutStatementsInputSchema).optional(),
      upsert: z.lazy(() => CompanyUpsertWithoutStatementsInputSchema).optional(),
      connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => CompanyUpdateToOneWithWhereWithoutStatementsInputSchema),
          z.lazy(() => CompanyUpdateWithoutStatementsInputSchema),
          z.lazy(() => CompanyUncheckedUpdateWithoutStatementsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default CompanyUpdateOneRequiredWithoutStatementsNestedInputSchema;

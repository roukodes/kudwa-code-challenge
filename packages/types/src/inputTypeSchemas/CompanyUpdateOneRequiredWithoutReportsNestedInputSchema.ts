import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateOrConnectWithoutReportsInputSchema } from './CompanyCreateOrConnectWithoutReportsInputSchema';
import { CompanyCreateWithoutReportsInputSchema } from './CompanyCreateWithoutReportsInputSchema';
import { CompanyUncheckedCreateWithoutReportsInputSchema } from './CompanyUncheckedCreateWithoutReportsInputSchema';
import { CompanyUncheckedUpdateWithoutReportsInputSchema } from './CompanyUncheckedUpdateWithoutReportsInputSchema';
import { CompanyUpdateToOneWithWhereWithoutReportsInputSchema } from './CompanyUpdateToOneWithWhereWithoutReportsInputSchema';
import { CompanyUpdateWithoutReportsInputSchema } from './CompanyUpdateWithoutReportsInputSchema';
import { CompanyUpsertWithoutReportsInputSchema } from './CompanyUpsertWithoutReportsInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyUpdateOneRequiredWithoutReportsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutReportsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CompanyCreateWithoutReportsInputSchema),
          z.lazy(() => CompanyUncheckedCreateWithoutReportsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutReportsInputSchema).optional(),
      upsert: z.lazy(() => CompanyUpsertWithoutReportsInputSchema).optional(),
      connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => CompanyUpdateToOneWithWhereWithoutReportsInputSchema),
          z.lazy(() => CompanyUpdateWithoutReportsInputSchema),
          z.lazy(() => CompanyUncheckedUpdateWithoutReportsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default CompanyUpdateOneRequiredWithoutReportsNestedInputSchema;

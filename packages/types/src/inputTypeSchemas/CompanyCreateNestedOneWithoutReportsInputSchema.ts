import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateOrConnectWithoutReportsInputSchema } from './CompanyCreateOrConnectWithoutReportsInputSchema';
import { CompanyCreateWithoutReportsInputSchema } from './CompanyCreateWithoutReportsInputSchema';
import { CompanyUncheckedCreateWithoutReportsInputSchema } from './CompanyUncheckedCreateWithoutReportsInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateNestedOneWithoutReportsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutReportsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CompanyCreateWithoutReportsInputSchema),
          z.lazy(() => CompanyUncheckedCreateWithoutReportsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutReportsInputSchema).optional(),
      connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
    })
    .strict();

export default CompanyCreateNestedOneWithoutReportsInputSchema;

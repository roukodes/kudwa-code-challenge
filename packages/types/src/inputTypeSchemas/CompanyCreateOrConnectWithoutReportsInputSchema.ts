import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyCreateWithoutReportsInputSchema } from './CompanyCreateWithoutReportsInputSchema';
import { CompanyUncheckedCreateWithoutReportsInputSchema } from './CompanyUncheckedCreateWithoutReportsInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';

export const CompanyCreateOrConnectWithoutReportsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutReportsInput> =
  z
    .object({
      where: z.lazy(() => CompanyWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CompanyCreateWithoutReportsInputSchema),
        z.lazy(() => CompanyUncheckedCreateWithoutReportsInputSchema),
      ]),
    })
    .strict();

export default CompanyCreateOrConnectWithoutReportsInputSchema;

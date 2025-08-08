import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { CompanyUncheckedUpdateWithoutReportsInputSchema } from './CompanyUncheckedUpdateWithoutReportsInputSchema';
import { CompanyUpdateWithoutReportsInputSchema } from './CompanyUpdateWithoutReportsInputSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyUpdateToOneWithWhereWithoutReportsInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutReportsInput> =
  z
    .object({
      where: z.lazy(() => CompanyWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => CompanyUpdateWithoutReportsInputSchema),
        z.lazy(() => CompanyUncheckedUpdateWithoutReportsInputSchema),
      ]),
    })
    .strict();

export default CompanyUpdateToOneWithWhereWithoutReportsInputSchema;

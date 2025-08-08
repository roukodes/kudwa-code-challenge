import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateWithoutCompanyInputSchema } from './ReportHeaderCreateWithoutCompanyInputSchema';
import { ReportHeaderUncheckedCreateWithoutCompanyInputSchema } from './ReportHeaderUncheckedCreateWithoutCompanyInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderCreateOrConnectWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => ReportHeaderWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportHeaderCreateWithoutCompanyInputSchema),
        z.lazy(() => ReportHeaderUncheckedCreateWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default ReportHeaderCreateOrConnectWithoutCompanyInputSchema;

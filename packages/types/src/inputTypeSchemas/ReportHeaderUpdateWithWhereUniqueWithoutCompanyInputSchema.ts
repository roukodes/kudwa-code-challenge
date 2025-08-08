import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderUncheckedUpdateWithoutCompanyInputSchema } from './ReportHeaderUncheckedUpdateWithoutCompanyInputSchema';
import { ReportHeaderUpdateWithoutCompanyInputSchema } from './ReportHeaderUpdateWithoutCompanyInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderUpdateWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => ReportHeaderWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ReportHeaderUpdateWithoutCompanyInputSchema),
        z.lazy(() => ReportHeaderUncheckedUpdateWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default ReportHeaderUpdateWithWhereUniqueWithoutCompanyInputSchema;

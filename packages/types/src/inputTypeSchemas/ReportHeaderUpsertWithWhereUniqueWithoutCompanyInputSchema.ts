import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateWithoutCompanyInputSchema } from './ReportHeaderCreateWithoutCompanyInputSchema';
import { ReportHeaderUncheckedCreateWithoutCompanyInputSchema } from './ReportHeaderUncheckedCreateWithoutCompanyInputSchema';
import { ReportHeaderUncheckedUpdateWithoutCompanyInputSchema } from './ReportHeaderUncheckedUpdateWithoutCompanyInputSchema';
import { ReportHeaderUpdateWithoutCompanyInputSchema } from './ReportHeaderUpdateWithoutCompanyInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderUpsertWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => ReportHeaderWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ReportHeaderUpdateWithoutCompanyInputSchema),
        z.lazy(() => ReportHeaderUncheckedUpdateWithoutCompanyInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportHeaderCreateWithoutCompanyInputSchema),
        z.lazy(() => ReportHeaderUncheckedCreateWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default ReportHeaderUpsertWithWhereUniqueWithoutCompanyInputSchema;

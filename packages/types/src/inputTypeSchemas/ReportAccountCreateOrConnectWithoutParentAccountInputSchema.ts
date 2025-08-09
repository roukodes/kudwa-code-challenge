import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutParentAccountInputSchema } from './ReportAccountCreateWithoutParentAccountInputSchema';
import { ReportAccountUncheckedCreateWithoutParentAccountInputSchema } from './ReportAccountUncheckedCreateWithoutParentAccountInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateOrConnectWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountCreateOrConnectWithoutParentAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutParentAccountInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutParentAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountCreateOrConnectWithoutParentAccountInputSchema;

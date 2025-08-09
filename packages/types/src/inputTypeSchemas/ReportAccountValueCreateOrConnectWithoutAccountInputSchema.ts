import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueCreateWithoutAccountInputSchema } from './ReportAccountValueCreateWithoutAccountInputSchema';
import { ReportAccountValueUncheckedCreateWithoutAccountInputSchema } from './ReportAccountValueUncheckedCreateWithoutAccountInputSchema';
import { ReportAccountValueWhereUniqueInputSchema } from './ReportAccountValueWhereUniqueInputSchema';

export const ReportAccountValueCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountValueCreateWithoutAccountInputSchema),
        z.lazy(() => ReportAccountValueUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueCreateOrConnectWithoutAccountInputSchema;

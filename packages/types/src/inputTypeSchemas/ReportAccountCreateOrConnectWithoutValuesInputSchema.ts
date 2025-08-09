import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutValuesInputSchema } from './ReportAccountCreateWithoutValuesInputSchema';
import { ReportAccountUncheckedCreateWithoutValuesInputSchema } from './ReportAccountUncheckedCreateWithoutValuesInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateOrConnectWithoutValuesInputSchema: z.ZodType<Prisma.ReportAccountCreateOrConnectWithoutValuesInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutValuesInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutValuesInputSchema),
      ]),
    })
    .strict();

export default ReportAccountCreateOrConnectWithoutValuesInputSchema;

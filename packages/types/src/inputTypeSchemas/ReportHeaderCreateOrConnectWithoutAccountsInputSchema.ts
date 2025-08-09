import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateWithoutAccountsInputSchema } from './ReportHeaderCreateWithoutAccountsInputSchema';
import { ReportHeaderUncheckedCreateWithoutAccountsInputSchema } from './ReportHeaderUncheckedCreateWithoutAccountsInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.ReportHeaderCreateOrConnectWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => ReportHeaderWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportHeaderCreateWithoutAccountsInputSchema),
        z.lazy(() => ReportHeaderUncheckedCreateWithoutAccountsInputSchema),
      ]),
    })
    .strict();

export default ReportHeaderCreateOrConnectWithoutAccountsInputSchema;

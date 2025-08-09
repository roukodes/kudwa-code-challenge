import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutChildAccountsInputSchema } from './ReportAccountCreateWithoutChildAccountsInputSchema';
import { ReportAccountUncheckedCreateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedCreateWithoutChildAccountsInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateOrConnectWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountCreateOrConnectWithoutChildAccountsInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutChildAccountsInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutChildAccountsInputSchema),
      ]),
    })
    .strict();

export default ReportAccountCreateOrConnectWithoutChildAccountsInputSchema;

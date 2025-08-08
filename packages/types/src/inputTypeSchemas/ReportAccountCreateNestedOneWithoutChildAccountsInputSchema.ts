import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateOrConnectWithoutChildAccountsInputSchema } from './ReportAccountCreateOrConnectWithoutChildAccountsInputSchema';
import { ReportAccountCreateWithoutChildAccountsInputSchema } from './ReportAccountCreateWithoutChildAccountsInputSchema';
import { ReportAccountUncheckedCreateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedCreateWithoutChildAccountsInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateNestedOneWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountCreateNestedOneWithoutChildAccountsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutChildAccountsInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutChildAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ReportAccountCreateOrConnectWithoutChildAccountsInputSchema)
        .optional(),
      connect: z.lazy(() => ReportAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export default ReportAccountCreateNestedOneWithoutChildAccountsInputSchema;

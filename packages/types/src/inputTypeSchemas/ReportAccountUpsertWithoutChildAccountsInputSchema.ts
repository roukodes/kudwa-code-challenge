import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutChildAccountsInputSchema } from './ReportAccountCreateWithoutChildAccountsInputSchema';
import { ReportAccountUncheckedCreateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedCreateWithoutChildAccountsInputSchema';
import { ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema';
import { ReportAccountUpdateWithoutChildAccountsInputSchema } from './ReportAccountUpdateWithoutChildAccountsInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountUpsertWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountUpsertWithoutChildAccountsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ReportAccountUpdateWithoutChildAccountsInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutChildAccountsInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutChildAccountsInputSchema),
      ]),
      where: z.lazy(() => ReportAccountWhereInputSchema).optional(),
    })
    .strict();

export default ReportAccountUpsertWithoutChildAccountsInputSchema;

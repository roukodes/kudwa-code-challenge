import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateWithoutAccountsInputSchema } from './ReportHeaderCreateWithoutAccountsInputSchema';
import { ReportHeaderUncheckedCreateWithoutAccountsInputSchema } from './ReportHeaderUncheckedCreateWithoutAccountsInputSchema';
import { ReportHeaderUncheckedUpdateWithoutAccountsInputSchema } from './ReportHeaderUncheckedUpdateWithoutAccountsInputSchema';
import { ReportHeaderUpdateWithoutAccountsInputSchema } from './ReportHeaderUpdateWithoutAccountsInputSchema';
import { ReportHeaderWhereInputSchema } from './ReportHeaderWhereInputSchema';

export const ReportHeaderUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.ReportHeaderUpsertWithoutAccountsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ReportHeaderUpdateWithoutAccountsInputSchema),
        z.lazy(() => ReportHeaderUncheckedUpdateWithoutAccountsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportHeaderCreateWithoutAccountsInputSchema),
        z.lazy(() => ReportHeaderUncheckedCreateWithoutAccountsInputSchema),
      ]),
      where: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
    })
    .strict();

export default ReportHeaderUpsertWithoutAccountsInputSchema;

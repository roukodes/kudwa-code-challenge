import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderUncheckedUpdateWithoutAccountsInputSchema } from './ReportHeaderUncheckedUpdateWithoutAccountsInputSchema';
import { ReportHeaderUpdateWithoutAccountsInputSchema } from './ReportHeaderUpdateWithoutAccountsInputSchema';
import { ReportHeaderWhereInputSchema } from './ReportHeaderWhereInputSchema';

export const ReportHeaderUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.ReportHeaderUpdateToOneWithWhereWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => ReportHeaderWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ReportHeaderUpdateWithoutAccountsInputSchema),
        z.lazy(() => ReportHeaderUncheckedUpdateWithoutAccountsInputSchema),
      ]),
    })
    .strict();

export default ReportHeaderUpdateToOneWithWhereWithoutAccountsInputSchema;

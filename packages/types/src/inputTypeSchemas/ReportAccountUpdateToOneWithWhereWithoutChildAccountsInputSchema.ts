import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema';
import { ReportAccountUpdateWithoutChildAccountsInputSchema } from './ReportAccountUpdateWithoutChildAccountsInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountUpdateToOneWithWhereWithoutChildAccountsInputSchema: z.ZodType<Prisma.ReportAccountUpdateToOneWithWhereWithoutChildAccountsInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ReportAccountUpdateWithoutChildAccountsInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateToOneWithWhereWithoutChildAccountsInputSchema;

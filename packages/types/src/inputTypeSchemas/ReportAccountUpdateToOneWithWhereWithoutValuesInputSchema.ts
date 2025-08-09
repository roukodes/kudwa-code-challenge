import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountUncheckedUpdateWithoutValuesInputSchema } from './ReportAccountUncheckedUpdateWithoutValuesInputSchema';
import { ReportAccountUpdateWithoutValuesInputSchema } from './ReportAccountUpdateWithoutValuesInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountUpdateToOneWithWhereWithoutValuesInputSchema: z.ZodType<Prisma.ReportAccountUpdateToOneWithWhereWithoutValuesInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ReportAccountUpdateWithoutValuesInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutValuesInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateToOneWithWhereWithoutValuesInputSchema;

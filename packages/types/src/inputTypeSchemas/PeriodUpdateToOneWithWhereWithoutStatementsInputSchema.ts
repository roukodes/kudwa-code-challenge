import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodUncheckedUpdateWithoutStatementsInputSchema } from './PeriodUncheckedUpdateWithoutStatementsInputSchema';
import { PeriodUpdateWithoutStatementsInputSchema } from './PeriodUpdateWithoutStatementsInputSchema';
import { PeriodWhereInputSchema } from './PeriodWhereInputSchema';

export const PeriodUpdateToOneWithWhereWithoutStatementsInputSchema: z.ZodType<Prisma.PeriodUpdateToOneWithWhereWithoutStatementsInput> =
  z
    .object({
      where: z.lazy(() => PeriodWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => PeriodUpdateWithoutStatementsInputSchema),
        z.lazy(() => PeriodUncheckedUpdateWithoutStatementsInputSchema),
      ]),
    })
    .strict();

export default PeriodUpdateToOneWithWhereWithoutStatementsInputSchema;

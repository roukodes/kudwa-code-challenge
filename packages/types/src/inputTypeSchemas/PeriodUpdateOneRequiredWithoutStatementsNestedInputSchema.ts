import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { PeriodCreateOrConnectWithoutStatementsInputSchema } from './PeriodCreateOrConnectWithoutStatementsInputSchema';
import { PeriodCreateWithoutStatementsInputSchema } from './PeriodCreateWithoutStatementsInputSchema';
import { PeriodUncheckedCreateWithoutStatementsInputSchema } from './PeriodUncheckedCreateWithoutStatementsInputSchema';
import { PeriodUncheckedUpdateWithoutStatementsInputSchema } from './PeriodUncheckedUpdateWithoutStatementsInputSchema';
import { PeriodUpdateToOneWithWhereWithoutStatementsInputSchema } from './PeriodUpdateToOneWithWhereWithoutStatementsInputSchema';
import { PeriodUpdateWithoutStatementsInputSchema } from './PeriodUpdateWithoutStatementsInputSchema';
import { PeriodUpsertWithoutStatementsInputSchema } from './PeriodUpsertWithoutStatementsInputSchema';
import { PeriodWhereUniqueInputSchema } from './PeriodWhereUniqueInputSchema';

export const PeriodUpdateOneRequiredWithoutStatementsNestedInputSchema: z.ZodType<Prisma.PeriodUpdateOneRequiredWithoutStatementsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PeriodCreateWithoutStatementsInputSchema),
          z.lazy(() => PeriodUncheckedCreateWithoutStatementsInputSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => PeriodCreateOrConnectWithoutStatementsInputSchema).optional(),
      upsert: z.lazy(() => PeriodUpsertWithoutStatementsInputSchema).optional(),
      connect: z.lazy(() => PeriodWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PeriodUpdateToOneWithWhereWithoutStatementsInputSchema),
          z.lazy(() => PeriodUpdateWithoutStatementsInputSchema),
          z.lazy(() => PeriodUncheckedUpdateWithoutStatementsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default PeriodUpdateOneRequiredWithoutStatementsNestedInputSchema;

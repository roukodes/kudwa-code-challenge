import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateOrConnectWithoutValuesInputSchema } from './ReportAccountCreateOrConnectWithoutValuesInputSchema';
import { ReportAccountCreateWithoutValuesInputSchema } from './ReportAccountCreateWithoutValuesInputSchema';
import { ReportAccountUncheckedCreateWithoutValuesInputSchema } from './ReportAccountUncheckedCreateWithoutValuesInputSchema';
import { ReportAccountUncheckedUpdateWithoutValuesInputSchema } from './ReportAccountUncheckedUpdateWithoutValuesInputSchema';
import { ReportAccountUpdateToOneWithWhereWithoutValuesInputSchema } from './ReportAccountUpdateToOneWithWhereWithoutValuesInputSchema';
import { ReportAccountUpdateWithoutValuesInputSchema } from './ReportAccountUpdateWithoutValuesInputSchema';
import { ReportAccountUpsertWithoutValuesInputSchema } from './ReportAccountUpsertWithoutValuesInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema: z.ZodType<Prisma.ReportAccountUpdateOneRequiredWithoutValuesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutValuesInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutValuesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ReportAccountCreateOrConnectWithoutValuesInputSchema)
        .optional(),
      upsert: z.lazy(() => ReportAccountUpsertWithoutValuesInputSchema).optional(),
      connect: z.lazy(() => ReportAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ReportAccountUpdateToOneWithWhereWithoutValuesInputSchema),
          z.lazy(() => ReportAccountUpdateWithoutValuesInputSchema),
          z.lazy(() => ReportAccountUncheckedUpdateWithoutValuesInputSchema),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountUpdateOneRequiredWithoutValuesNestedInputSchema;

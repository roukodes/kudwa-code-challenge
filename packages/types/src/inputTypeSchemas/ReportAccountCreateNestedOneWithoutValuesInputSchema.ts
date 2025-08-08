import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateOrConnectWithoutValuesInputSchema } from './ReportAccountCreateOrConnectWithoutValuesInputSchema';
import { ReportAccountCreateWithoutValuesInputSchema } from './ReportAccountCreateWithoutValuesInputSchema';
import { ReportAccountUncheckedCreateWithoutValuesInputSchema } from './ReportAccountUncheckedCreateWithoutValuesInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateNestedOneWithoutValuesInputSchema: z.ZodType<Prisma.ReportAccountCreateNestedOneWithoutValuesInput> =
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
      connect: z.lazy(() => ReportAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export default ReportAccountCreateNestedOneWithoutValuesInputSchema;

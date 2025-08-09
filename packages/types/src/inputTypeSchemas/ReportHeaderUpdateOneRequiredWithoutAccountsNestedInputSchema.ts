import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateOrConnectWithoutAccountsInputSchema } from './ReportHeaderCreateOrConnectWithoutAccountsInputSchema';
import { ReportHeaderCreateWithoutAccountsInputSchema } from './ReportHeaderCreateWithoutAccountsInputSchema';
import { ReportHeaderUncheckedCreateWithoutAccountsInputSchema } from './ReportHeaderUncheckedCreateWithoutAccountsInputSchema';
import { ReportHeaderUncheckedUpdateWithoutAccountsInputSchema } from './ReportHeaderUncheckedUpdateWithoutAccountsInputSchema';
import { ReportHeaderUpdateToOneWithWhereWithoutAccountsInputSchema } from './ReportHeaderUpdateToOneWithWhereWithoutAccountsInputSchema';
import { ReportHeaderUpdateWithoutAccountsInputSchema } from './ReportHeaderUpdateWithoutAccountsInputSchema';
import { ReportHeaderUpsertWithoutAccountsInputSchema } from './ReportHeaderUpsertWithoutAccountsInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.ReportHeaderUpdateOneRequiredWithoutAccountsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportHeaderCreateWithoutAccountsInputSchema),
          z.lazy(() => ReportHeaderUncheckedCreateWithoutAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ReportHeaderCreateOrConnectWithoutAccountsInputSchema)
        .optional(),
      upsert: z.lazy(() => ReportHeaderUpsertWithoutAccountsInputSchema).optional(),
      connect: z.lazy(() => ReportHeaderWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ReportHeaderUpdateToOneWithWhereWithoutAccountsInputSchema),
          z.lazy(() => ReportHeaderUpdateWithoutAccountsInputSchema),
          z.lazy(() => ReportHeaderUncheckedUpdateWithoutAccountsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default ReportHeaderUpdateOneRequiredWithoutAccountsNestedInputSchema;

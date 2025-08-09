import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateOrConnectWithoutChildAccountsInputSchema } from './ReportAccountCreateOrConnectWithoutChildAccountsInputSchema';
import { ReportAccountCreateWithoutChildAccountsInputSchema } from './ReportAccountCreateWithoutChildAccountsInputSchema';
import { ReportAccountUncheckedCreateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedCreateWithoutChildAccountsInputSchema';
import { ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema } from './ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema';
import { ReportAccountUpdateToOneWithWhereWithoutChildAccountsInputSchema } from './ReportAccountUpdateToOneWithWhereWithoutChildAccountsInputSchema';
import { ReportAccountUpdateWithoutChildAccountsInputSchema } from './ReportAccountUpdateWithoutChildAccountsInputSchema';
import { ReportAccountUpsertWithoutChildAccountsInputSchema } from './ReportAccountUpsertWithoutChildAccountsInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema: z.ZodType<Prisma.ReportAccountUpdateOneWithoutChildAccountsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutChildAccountsInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutChildAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ReportAccountCreateOrConnectWithoutChildAccountsInputSchema)
        .optional(),
      upsert: z.lazy(() => ReportAccountUpsertWithoutChildAccountsInputSchema).optional(),
      disconnect: z.union([z.boolean(), z.lazy(() => ReportAccountWhereInputSchema)]).optional(),
      delete: z.union([z.boolean(), z.lazy(() => ReportAccountWhereInputSchema)]).optional(),
      connect: z.lazy(() => ReportAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ReportAccountUpdateToOneWithWhereWithoutChildAccountsInputSchema),
          z.lazy(() => ReportAccountUpdateWithoutChildAccountsInputSchema),
          z.lazy(() => ReportAccountUncheckedUpdateWithoutChildAccountsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountUpdateOneWithoutChildAccountsNestedInputSchema;

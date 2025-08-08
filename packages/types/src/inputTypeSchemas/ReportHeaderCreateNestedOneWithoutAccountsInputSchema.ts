import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderCreateOrConnectWithoutAccountsInputSchema } from './ReportHeaderCreateOrConnectWithoutAccountsInputSchema';
import { ReportHeaderCreateWithoutAccountsInputSchema } from './ReportHeaderCreateWithoutAccountsInputSchema';
import { ReportHeaderUncheckedCreateWithoutAccountsInputSchema } from './ReportHeaderUncheckedCreateWithoutAccountsInputSchema';
import { ReportHeaderWhereUniqueInputSchema } from './ReportHeaderWhereUniqueInputSchema';

export const ReportHeaderCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.ReportHeaderCreateNestedOneWithoutAccountsInput> =
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
      connect: z.lazy(() => ReportHeaderWhereUniqueInputSchema).optional(),
    })
    .strict();

export default ReportHeaderCreateNestedOneWithoutAccountsInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateOrConnectWithoutAccountMappingInputSchema } from './ReportAccountCreateOrConnectWithoutAccountMappingInputSchema';
import { ReportAccountCreateWithoutAccountMappingInputSchema } from './ReportAccountCreateWithoutAccountMappingInputSchema';
import { ReportAccountUncheckedCreateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedCreateWithoutAccountMappingInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateNestedOneWithoutAccountMappingInputSchema: z.ZodType<Prisma.ReportAccountCreateNestedOneWithoutAccountMappingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutAccountMappingInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutAccountMappingInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ReportAccountCreateOrConnectWithoutAccountMappingInputSchema)
        .optional(),
      connect: z.lazy(() => ReportAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export default ReportAccountCreateNestedOneWithoutAccountMappingInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutAccountMappingInputSchema } from './ReportAccountCreateWithoutAccountMappingInputSchema';
import { ReportAccountUncheckedCreateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedCreateWithoutAccountMappingInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateOrConnectWithoutAccountMappingInputSchema: z.ZodType<Prisma.ReportAccountCreateOrConnectWithoutAccountMappingInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutAccountMappingInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutAccountMappingInputSchema),
      ]),
    })
    .strict();

export default ReportAccountCreateOrConnectWithoutAccountMappingInputSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateWithoutReportAccountInputSchema } from './AccountMappingCreateWithoutReportAccountInputSchema';
import { AccountMappingUncheckedCreateWithoutReportAccountInputSchema } from './AccountMappingUncheckedCreateWithoutReportAccountInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingCreateOrConnectWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingCreateOrConnectWithoutReportAccountInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AccountMappingCreateWithoutReportAccountInputSchema),
        z.lazy(() => AccountMappingUncheckedCreateWithoutReportAccountInputSchema),
      ]),
    })
    .strict();

export default AccountMappingCreateOrConnectWithoutReportAccountInputSchema;

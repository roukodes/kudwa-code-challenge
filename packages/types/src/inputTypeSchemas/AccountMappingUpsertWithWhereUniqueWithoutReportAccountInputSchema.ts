import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateWithoutReportAccountInputSchema } from './AccountMappingCreateWithoutReportAccountInputSchema';
import { AccountMappingUncheckedCreateWithoutReportAccountInputSchema } from './AccountMappingUncheckedCreateWithoutReportAccountInputSchema';
import { AccountMappingUncheckedUpdateWithoutReportAccountInputSchema } from './AccountMappingUncheckedUpdateWithoutReportAccountInputSchema';
import { AccountMappingUpdateWithoutReportAccountInputSchema } from './AccountMappingUpdateWithoutReportAccountInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingUpsertWithWhereUniqueWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingUpsertWithWhereUniqueWithoutReportAccountInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => AccountMappingUpdateWithoutReportAccountInputSchema),
        z.lazy(() => AccountMappingUncheckedUpdateWithoutReportAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountMappingCreateWithoutReportAccountInputSchema),
        z.lazy(() => AccountMappingUncheckedCreateWithoutReportAccountInputSchema),
      ]),
    })
    .strict();

export default AccountMappingUpsertWithWhereUniqueWithoutReportAccountInputSchema;

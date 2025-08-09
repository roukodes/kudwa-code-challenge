import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUncheckedUpdateWithoutReportAccountInputSchema } from './AccountMappingUncheckedUpdateWithoutReportAccountInputSchema';
import { AccountMappingUpdateWithoutReportAccountInputSchema } from './AccountMappingUpdateWithoutReportAccountInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingUpdateWithWhereUniqueWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingUpdateWithWhereUniqueWithoutReportAccountInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AccountMappingUpdateWithoutReportAccountInputSchema),
        z.lazy(() => AccountMappingUncheckedUpdateWithoutReportAccountInputSchema),
      ]),
    })
    .strict();

export default AccountMappingUpdateWithWhereUniqueWithoutReportAccountInputSchema;

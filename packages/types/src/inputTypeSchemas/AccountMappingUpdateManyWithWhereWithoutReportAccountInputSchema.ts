import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingScalarWhereInputSchema } from './AccountMappingScalarWhereInputSchema';
import { AccountMappingUncheckedUpdateManyWithoutReportAccountInputSchema } from './AccountMappingUncheckedUpdateManyWithoutReportAccountInputSchema';
import { AccountMappingUpdateManyMutationInputSchema } from './AccountMappingUpdateManyMutationInputSchema';

export const AccountMappingUpdateManyWithWhereWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingUpdateManyWithWhereWithoutReportAccountInput> =
  z
    .object({
      where: z.lazy(() => AccountMappingScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => AccountMappingUpdateManyMutationInputSchema),
        z.lazy(() => AccountMappingUncheckedUpdateManyWithoutReportAccountInputSchema),
      ]),
    })
    .strict();

export default AccountMappingUpdateManyWithWhereWithoutReportAccountInputSchema;

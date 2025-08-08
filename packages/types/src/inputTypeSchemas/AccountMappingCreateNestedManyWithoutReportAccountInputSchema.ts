import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyReportAccountInputEnvelopeSchema } from './AccountMappingCreateManyReportAccountInputEnvelopeSchema';
import { AccountMappingCreateOrConnectWithoutReportAccountInputSchema } from './AccountMappingCreateOrConnectWithoutReportAccountInputSchema';
import { AccountMappingCreateWithoutReportAccountInputSchema } from './AccountMappingCreateWithoutReportAccountInputSchema';
import { AccountMappingUncheckedCreateWithoutReportAccountInputSchema } from './AccountMappingUncheckedCreateWithoutReportAccountInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingCreateNestedManyWithoutReportAccountInputSchema: z.ZodType<Prisma.AccountMappingCreateNestedManyWithoutReportAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountMappingCreateWithoutReportAccountInputSchema),
          z.lazy(() => AccountMappingCreateWithoutReportAccountInputSchema).array(),
          z.lazy(() => AccountMappingUncheckedCreateWithoutReportAccountInputSchema),
          z.lazy(() => AccountMappingUncheckedCreateWithoutReportAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountMappingCreateOrConnectWithoutReportAccountInputSchema),
          z.lazy(() => AccountMappingCreateOrConnectWithoutReportAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => AccountMappingCreateManyReportAccountInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => AccountMappingWhereUniqueInputSchema),
          z.lazy(() => AccountMappingWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default AccountMappingCreateNestedManyWithoutReportAccountInputSchema;

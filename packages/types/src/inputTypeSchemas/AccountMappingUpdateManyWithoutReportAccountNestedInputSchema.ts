import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyReportAccountInputEnvelopeSchema } from './AccountMappingCreateManyReportAccountInputEnvelopeSchema';
import { AccountMappingCreateOrConnectWithoutReportAccountInputSchema } from './AccountMappingCreateOrConnectWithoutReportAccountInputSchema';
import { AccountMappingCreateWithoutReportAccountInputSchema } from './AccountMappingCreateWithoutReportAccountInputSchema';
import { AccountMappingScalarWhereInputSchema } from './AccountMappingScalarWhereInputSchema';
import { AccountMappingUncheckedCreateWithoutReportAccountInputSchema } from './AccountMappingUncheckedCreateWithoutReportAccountInputSchema';
import { AccountMappingUpdateManyWithWhereWithoutReportAccountInputSchema } from './AccountMappingUpdateManyWithWhereWithoutReportAccountInputSchema';
import { AccountMappingUpdateWithWhereUniqueWithoutReportAccountInputSchema } from './AccountMappingUpdateWithWhereUniqueWithoutReportAccountInputSchema';
import { AccountMappingUpsertWithWhereUniqueWithoutReportAccountInputSchema } from './AccountMappingUpsertWithWhereUniqueWithoutReportAccountInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingUpdateManyWithoutReportAccountNestedInputSchema: z.ZodType<Prisma.AccountMappingUpdateManyWithoutReportAccountNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => AccountMappingUpsertWithWhereUniqueWithoutReportAccountInputSchema),
          z.lazy(() => AccountMappingUpsertWithWhereUniqueWithoutReportAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => AccountMappingCreateManyReportAccountInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => AccountMappingWhereUniqueInputSchema),
          z.lazy(() => AccountMappingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountMappingWhereUniqueInputSchema),
          z.lazy(() => AccountMappingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountMappingWhereUniqueInputSchema),
          z.lazy(() => AccountMappingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountMappingWhereUniqueInputSchema),
          z.lazy(() => AccountMappingWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountMappingUpdateWithWhereUniqueWithoutReportAccountInputSchema),
          z.lazy(() => AccountMappingUpdateWithWhereUniqueWithoutReportAccountInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountMappingUpdateManyWithWhereWithoutReportAccountInputSchema),
          z.lazy(() => AccountMappingUpdateManyWithWhereWithoutReportAccountInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountMappingScalarWhereInputSchema),
          z.lazy(() => AccountMappingScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default AccountMappingUpdateManyWithoutReportAccountNestedInputSchema;

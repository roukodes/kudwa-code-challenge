import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyStatementLineItemInputEnvelopeSchema } from './AccountMappingCreateManyStatementLineItemInputEnvelopeSchema';
import { AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema } from './AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema';
import { AccountMappingCreateWithoutStatementLineItemInputSchema } from './AccountMappingCreateWithoutStatementLineItemInputSchema';
import { AccountMappingScalarWhereInputSchema } from './AccountMappingScalarWhereInputSchema';
import { AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema';
import { AccountMappingUpdateManyWithWhereWithoutStatementLineItemInputSchema } from './AccountMappingUpdateManyWithWhereWithoutStatementLineItemInputSchema';
import { AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInputSchema } from './AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInputSchema';
import { AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInputSchema } from './AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingUncheckedUpdateManyWithoutStatementLineItemNestedInputSchema: z.ZodType<Prisma.AccountMappingUncheckedUpdateManyWithoutStatementLineItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountMappingCreateWithoutStatementLineItemInputSchema),
          z.lazy(() => AccountMappingCreateWithoutStatementLineItemInputSchema).array(),
          z.lazy(() => AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema),
          z.lazy(() => AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema),
          z.lazy(() => AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInputSchema),
          z
            .lazy(() => AccountMappingUpsertWithWhereUniqueWithoutStatementLineItemInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountMappingCreateManyStatementLineItemInputEnvelopeSchema)
        .optional(),
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
          z.lazy(() => AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInputSchema),
          z
            .lazy(() => AccountMappingUpdateWithWhereUniqueWithoutStatementLineItemInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountMappingUpdateManyWithWhereWithoutStatementLineItemInputSchema),
          z
            .lazy(() => AccountMappingUpdateManyWithWhereWithoutStatementLineItemInputSchema)
            .array(),
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

export default AccountMappingUncheckedUpdateManyWithoutStatementLineItemNestedInputSchema;

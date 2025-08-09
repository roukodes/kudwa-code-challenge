import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyStatementLineItemInputEnvelopeSchema } from './AccountMappingCreateManyStatementLineItemInputEnvelopeSchema';
import { AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema } from './AccountMappingCreateOrConnectWithoutStatementLineItemInputSchema';
import { AccountMappingCreateWithoutStatementLineItemInputSchema } from './AccountMappingCreateWithoutStatementLineItemInputSchema';
import { AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedCreateWithoutStatementLineItemInputSchema';
import { AccountMappingWhereUniqueInputSchema } from './AccountMappingWhereUniqueInputSchema';

export const AccountMappingCreateNestedManyWithoutStatementLineItemInputSchema: z.ZodType<Prisma.AccountMappingCreateNestedManyWithoutStatementLineItemInput> =
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
      createMany: z
        .lazy(() => AccountMappingCreateManyStatementLineItemInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountMappingWhereUniqueInputSchema),
          z.lazy(() => AccountMappingWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default AccountMappingCreateNestedManyWithoutStatementLineItemInputSchema;

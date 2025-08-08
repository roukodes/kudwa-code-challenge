import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingCreateManyStatementLineItemInputSchema } from './AccountMappingCreateManyStatementLineItemInputSchema';

export const AccountMappingCreateManyStatementLineItemInputEnvelopeSchema: z.ZodType<Prisma.AccountMappingCreateManyStatementLineItemInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AccountMappingCreateManyStatementLineItemInputSchema),
        z.lazy(() => AccountMappingCreateManyStatementLineItemInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default AccountMappingCreateManyStatementLineItemInputEnvelopeSchema;

import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const AccountMappingUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountMappingUpdateManyMutationInput> =
  z
    .object({
      notes: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export default AccountMappingUpdateManyMutationInputSchema;

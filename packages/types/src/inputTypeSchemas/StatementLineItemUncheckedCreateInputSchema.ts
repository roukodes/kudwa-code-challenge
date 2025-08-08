import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingUncheckedCreateNestedManyWithoutStatementLineItemInputSchema } from './AccountMappingUncheckedCreateNestedManyWithoutStatementLineItemInputSchema';
import { StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema } from './StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema';

export const StatementLineItemUncheckedCreateInputSchema: z.ZodType<Prisma.StatementLineItemUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      categoryId: z.number().int(),
      parentLineItemId: z.number().int().optional().nullable(),
      name: z.string(),
      value: z.number().optional().nullable(),
      accountId: z.string().optional().nullable(),
      childLineItems: z
        .lazy(() => StatementLineItemUncheckedCreateNestedManyWithoutParentLineItemInputSchema)
        .optional(),
      AccountMapping: z
        .lazy(() => AccountMappingUncheckedCreateNestedManyWithoutStatementLineItemInputSchema)
        .optional(),
    })
    .strict();

export default StatementLineItemUncheckedCreateInputSchema;

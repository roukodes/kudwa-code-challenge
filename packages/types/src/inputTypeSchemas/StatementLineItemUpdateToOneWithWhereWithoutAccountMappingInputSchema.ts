import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema';
import { StatementLineItemUpdateWithoutAccountMappingInputSchema } from './StatementLineItemUpdateWithoutAccountMappingInputSchema';
import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemUpdateToOneWithWhereWithoutAccountMappingInputSchema: z.ZodType<Prisma.StatementLineItemUpdateToOneWithWhereWithoutAccountMappingInput> =
  z
    .object({
      where: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutAccountMappingInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema),
      ]),
    })
    .strict();

export default StatementLineItemUpdateToOneWithWhereWithoutAccountMappingInputSchema;

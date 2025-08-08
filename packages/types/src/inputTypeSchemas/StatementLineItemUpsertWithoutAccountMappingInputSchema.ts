import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateWithoutAccountMappingInputSchema } from './StatementLineItemCreateWithoutAccountMappingInputSchema';
import { StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema';
import { StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema';
import { StatementLineItemUpdateWithoutAccountMappingInputSchema } from './StatementLineItemUpdateWithoutAccountMappingInputSchema';
import { StatementLineItemWhereInputSchema } from './StatementLineItemWhereInputSchema';

export const StatementLineItemUpsertWithoutAccountMappingInputSchema: z.ZodType<Prisma.StatementLineItemUpsertWithoutAccountMappingInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => StatementLineItemUpdateWithoutAccountMappingInputSchema),
        z.lazy(() => StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementLineItemCreateWithoutAccountMappingInputSchema),
        z.lazy(() => StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema),
      ]),
      where: z.lazy(() => StatementLineItemWhereInputSchema).optional(),
    })
    .strict();

export default StatementLineItemUpsertWithoutAccountMappingInputSchema;

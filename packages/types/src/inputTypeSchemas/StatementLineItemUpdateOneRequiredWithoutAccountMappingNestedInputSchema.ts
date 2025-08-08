import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema } from './StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema';
import { StatementLineItemCreateWithoutAccountMappingInputSchema } from './StatementLineItemCreateWithoutAccountMappingInputSchema';
import { StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema';
import { StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema } from './StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema';
import { StatementLineItemUpdateToOneWithWhereWithoutAccountMappingInputSchema } from './StatementLineItemUpdateToOneWithWhereWithoutAccountMappingInputSchema';
import { StatementLineItemUpdateWithoutAccountMappingInputSchema } from './StatementLineItemUpdateWithoutAccountMappingInputSchema';
import { StatementLineItemUpsertWithoutAccountMappingInputSchema } from './StatementLineItemUpsertWithoutAccountMappingInputSchema';
import { StatementLineItemWhereUniqueInputSchema } from './StatementLineItemWhereUniqueInputSchema';

export const StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema: z.ZodType<Prisma.StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementLineItemCreateWithoutAccountMappingInputSchema),
          z.lazy(() => StatementLineItemUncheckedCreateWithoutAccountMappingInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StatementLineItemCreateOrConnectWithoutAccountMappingInputSchema)
        .optional(),
      upsert: z.lazy(() => StatementLineItemUpsertWithoutAccountMappingInputSchema).optional(),
      connect: z.lazy(() => StatementLineItemWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => StatementLineItemUpdateToOneWithWhereWithoutAccountMappingInputSchema),
          z.lazy(() => StatementLineItemUpdateWithoutAccountMappingInputSchema),
          z.lazy(() => StatementLineItemUncheckedUpdateWithoutAccountMappingInputSchema),
        ])
        .optional(),
    })
    .strict();

export default StatementLineItemUpdateOneRequiredWithoutAccountMappingNestedInputSchema;

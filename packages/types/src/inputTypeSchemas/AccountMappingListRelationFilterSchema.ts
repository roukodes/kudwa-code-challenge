import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { AccountMappingWhereInputSchema } from './AccountMappingWhereInputSchema';

export const AccountMappingListRelationFilterSchema: z.ZodType<Prisma.AccountMappingListRelationFilter> =
  z
    .object({
      every: z.lazy(() => AccountMappingWhereInputSchema).optional(),
      some: z.lazy(() => AccountMappingWhereInputSchema).optional(),
      none: z.lazy(() => AccountMappingWhereInputSchema).optional(),
    })
    .strict();

export default AccountMappingListRelationFilterSchema;

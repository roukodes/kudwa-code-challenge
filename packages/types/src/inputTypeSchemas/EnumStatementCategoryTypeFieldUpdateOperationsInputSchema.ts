import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryTypeSchema } from './StatementCategoryTypeSchema';

export const EnumStatementCategoryTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatementCategoryTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => StatementCategoryTypeSchema).optional(),
    })
    .strict();

export default EnumStatementCategoryTypeFieldUpdateOperationsInputSchema;

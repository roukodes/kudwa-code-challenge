import { z } from 'zod';

import { StatementCategoryTypeSchema } from '../inputTypeSchemas/StatementCategoryTypeSchema';

/////////////////////////////////////////
// STATEMENT CATEGORY SCHEMA
/////////////////////////////////////////

export const StatementCategorySchema = z.object({
  type: StatementCategoryTypeSchema,
  id: z.number().int(),
  statementId: z.number().int(),
  name: z.string(),
  totalValue: z.number().nullable(),
});

export type StatementCategory = z.infer<typeof StatementCategorySchema>;

export default StatementCategorySchema;

import { z } from 'zod';

export const StatementCategoryTypeSchema = z.enum([
  'REVENUE',
  'COGS',
  'OPERATING_REVENUE',
  'NON_OPERATING_REVENUE',
  'OPERATING_EXPENSE',
  'NON_OPERATING_EXPENSE',
]);

export type StatementCategoryTypeType = `${z.infer<typeof StatementCategoryTypeSchema>}`;

export default StatementCategoryTypeSchema;

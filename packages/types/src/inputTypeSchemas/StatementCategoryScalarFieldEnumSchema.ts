import { z } from 'zod';

export const StatementCategoryScalarFieldEnumSchema = z.enum([
  'id',
  'statementId',
  'type',
  'name',
  'totalValue',
]);

export default StatementCategoryScalarFieldEnumSchema;

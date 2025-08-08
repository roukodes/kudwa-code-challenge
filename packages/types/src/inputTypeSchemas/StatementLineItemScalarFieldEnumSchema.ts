import { z } from 'zod';

export const StatementLineItemScalarFieldEnumSchema = z.enum([
  'id',
  'categoryId',
  'parentLineItemId',
  'name',
  'value',
  'accountId',
]);

export default StatementLineItemScalarFieldEnumSchema;

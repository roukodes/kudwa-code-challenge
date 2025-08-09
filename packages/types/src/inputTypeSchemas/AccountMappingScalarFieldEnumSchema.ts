import { z } from 'zod';

export const AccountMappingScalarFieldEnumSchema = z.enum([
  'id',
  'statementLineItemId',
  'reportAccountId',
  'notes',
]);

export default AccountMappingScalarFieldEnumSchema;

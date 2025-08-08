import { z } from 'zod';

export const StatementScalarFieldEnumSchema = z.enum([
  'id',
  'companyId',
  'periodId',
  'rootfiId',
  'grossProfit',
  'operatingProfit',
  'netProfit',
  'earningsBeforeTaxes',
  'taxes',
  'customFields',
  'createdAt',
  'updatedAt',
]);

export default StatementScalarFieldEnumSchema;

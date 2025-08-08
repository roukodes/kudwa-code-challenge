import { z } from 'zod';

export const ReportAccountValueScalarFieldEnumSchema = z.enum([
  'id',
  'accountId',
  'periodId',
  'amount',
]);

export default ReportAccountValueScalarFieldEnumSchema;

import { z } from 'zod';

export const ReportAccountScalarFieldEnumSchema = z.enum([
  'id',
  'reportId',
  'accountName',
  'parentAccountId',
  'type',
]);

export default ReportAccountScalarFieldEnumSchema;

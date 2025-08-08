import { z } from 'zod';

export const ReportHeaderScalarFieldEnumSchema = z.enum([
  'id',
  'companyId',
  'reportName',
  'basis',
  'startPeriod',
  'endPeriod',
  'currency',
  'options',
]);

export default ReportHeaderScalarFieldEnumSchema;

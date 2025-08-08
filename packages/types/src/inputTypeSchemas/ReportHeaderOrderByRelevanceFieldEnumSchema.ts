import { z } from 'zod';

export const ReportHeaderOrderByRelevanceFieldEnumSchema = z.enum([
  'reportName',
  'basis',
  'currency',
]);

export default ReportHeaderOrderByRelevanceFieldEnumSchema;

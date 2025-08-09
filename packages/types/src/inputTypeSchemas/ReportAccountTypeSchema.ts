import { z } from 'zod';

export const ReportAccountTypeSchema = z.enum(['INCOME', 'EXPENSE', 'COGS', 'OTHER']);

export type ReportAccountTypeType = `${z.infer<typeof ReportAccountTypeSchema>}`;

export default ReportAccountTypeSchema;

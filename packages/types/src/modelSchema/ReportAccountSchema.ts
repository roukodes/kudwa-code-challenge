import { z } from 'zod';

import { ReportAccountTypeSchema } from '../inputTypeSchemas/ReportAccountTypeSchema';

/////////////////////////////////////////
// REPORT ACCOUNT SCHEMA
/////////////////////////////////////////

export const ReportAccountSchema = z.object({
  type: ReportAccountTypeSchema.nullable(),
  id: z.number().int(),
  reportId: z.number().int(),
  accountName: z.string(),
  parentAccountId: z.number().int().nullable(),
});

export type ReportAccount = z.infer<typeof ReportAccountSchema>;

export default ReportAccountSchema;

import { z } from 'zod';

/////////////////////////////////////////
// REPORT ACCOUNT VALUE SCHEMA
/////////////////////////////////////////

export const ReportAccountValueSchema = z.object({
  id: z.number().int(),
  accountId: z.number().int(),
  periodId: z.number().int(),
  amount: z.number().nullable(),
});

export type ReportAccountValue = z.infer<typeof ReportAccountValueSchema>;

export default ReportAccountValueSchema;

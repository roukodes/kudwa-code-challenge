import { z } from 'zod';

import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';

/////////////////////////////////////////
// REPORT HEADER SCHEMA
/////////////////////////////////////////

export const ReportHeaderSchema = z.object({
  id: z.number().int(),
  companyId: z.number().int(),
  reportName: z.string(),
  basis: z.string(),
  startPeriod: z.coerce.date(),
  endPeriod: z.coerce.date(),
  currency: z.string().nullable(),
  options: JsonValueSchema.nullable(),
});

export type ReportHeader = z.infer<typeof ReportHeaderSchema>;

export default ReportHeaderSchema;

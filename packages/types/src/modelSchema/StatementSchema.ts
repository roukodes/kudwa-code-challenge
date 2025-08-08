import { z } from 'zod';

import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema';

/////////////////////////////////////////
// STATEMENT SCHEMA
/////////////////////////////////////////

export const StatementSchema = z.object({
  id: z.number().int(),
  companyId: z.number().int(),
  periodId: z.number().int(),
  rootfiId: z.number().int(),
  grossProfit: z.number().nullable(),
  operatingProfit: z.number().nullable(),
  netProfit: z.number().nullable(),
  earningsBeforeTaxes: z.number().nullable(),
  taxes: z.number().nullable(),
  customFields: JsonValueSchema.nullable(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
});

export type Statement = z.infer<typeof StatementSchema>;

export default StatementSchema;

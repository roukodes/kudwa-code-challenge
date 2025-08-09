import { z } from 'zod';

/////////////////////////////////////////
// STATEMENT LINE ITEM SCHEMA
/////////////////////////////////////////

export const StatementLineItemSchema = z.object({
  id: z.number().int(),
  categoryId: z.number().int(),
  parentLineItemId: z.number().int().nullable(),
  name: z.string(),
  value: z.number().nullable(),
  accountId: z.string().nullable(),
});

export type StatementLineItem = z.infer<typeof StatementLineItemSchema>;

export default StatementLineItemSchema;

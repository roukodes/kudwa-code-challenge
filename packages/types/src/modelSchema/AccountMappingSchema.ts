import { z } from 'zod';

/////////////////////////////////////////
// ACCOUNT MAPPING SCHEMA
/////////////////////////////////////////

export const AccountMappingSchema = z.object({
  id: z.number().int(),
  statementLineItemId: z.number().int(),
  reportAccountId: z.number().int(),
  notes: z.string().nullable(),
});

export type AccountMapping = z.infer<typeof AccountMappingSchema>;

export default AccountMappingSchema;

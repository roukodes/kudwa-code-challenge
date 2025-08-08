import { z } from 'zod';

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.number().int(),
  name: z.string().nullable(),
  currency: z.string().nullable(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
});

export type Company = z.infer<typeof CompanySchema>;

export default CompanySchema;

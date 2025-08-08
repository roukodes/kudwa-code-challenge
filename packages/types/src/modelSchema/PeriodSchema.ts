import { z } from 'zod';

/////////////////////////////////////////
// PERIOD SCHEMA
/////////////////////////////////////////

export const PeriodSchema = z.object({
  id: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  label: z.string(),
});

export type Period = z.infer<typeof PeriodSchema>;

export default PeriodSchema;

import { z } from 'zod';

export const PeriodParams = z.object({ periodId: z.coerce.number().int().positive() });

export type PeriodParamsType = z.infer<typeof PeriodParams>;

export const ListQuery = z
  .object({
    full: z.coerce.boolean().optional(),
    limit: z.coerce.number().int().min(1).max(100).optional(),
    cursor: z.coerce.number().int().positive().optional(),
  })
  .optional();

export type ListQueryType = z.infer<typeof ListQuery>;

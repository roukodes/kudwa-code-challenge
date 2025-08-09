import z from 'zod';

export const ReportParams = z.object({ reportId: z.coerce.number().int().positive() });

export type ReportParamsType = z.infer<typeof ReportParams>;

import z from 'zod';

export const ReportByIdParams = z.object({ reportId: z.coerce.number().int().positive() });

export type ReportByIdParamsType = z.infer<typeof ReportByIdParams>;

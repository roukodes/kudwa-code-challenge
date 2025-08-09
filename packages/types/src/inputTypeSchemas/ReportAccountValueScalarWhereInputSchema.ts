import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const ReportAccountValueScalarWhereInputSchema: z.ZodType<Prisma.ReportAccountValueScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ReportAccountValueScalarWhereInputSchema),
          z.lazy(() => ReportAccountValueScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ReportAccountValueScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ReportAccountValueScalarWhereInputSchema),
          z.lazy(() => ReportAccountValueScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      accountId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      periodId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      amount: z
        .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
    })
    .strict();

export default ReportAccountValueScalarWhereInputSchema;

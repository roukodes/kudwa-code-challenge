import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';

export const StatementScalarWhereInputSchema: z.ZodType<Prisma.StatementScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StatementScalarWhereInputSchema),
        z.lazy(() => StatementScalarWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StatementScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StatementScalarWhereInputSchema),
        z.lazy(() => StatementScalarWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    companyId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    periodId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    rootfiId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    grossProfit: z
      .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    operatingProfit: z
      .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    netProfit: z
      .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    earningsBeforeTaxes: z
      .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    taxes: z
      .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    updatedAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
  })
  .strict();

export default StatementScalarWhereInputSchema;

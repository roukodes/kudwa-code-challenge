import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(JsonValueSchema),
    z.record(z.string(), JsonValueSchema),
  ]),
);

export type JsonValueType = z.infer<typeof JsonValueSchema>;

export default JsonValueSchema;

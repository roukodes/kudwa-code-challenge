import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(
  () =>
    z.union([
      z.string(),
      z.number(),
      z.boolean(),
      z.null(),
      z.array(InputJsonValueSchema),
      z.record(z.string(), InputJsonValueSchema),
    ]) as z.ZodType<Prisma.InputJsonValue>,
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;

export default InputJsonValueSchema;

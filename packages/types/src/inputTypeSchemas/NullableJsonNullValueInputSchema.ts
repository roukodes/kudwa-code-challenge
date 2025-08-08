import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const NullableJsonNullValueInputSchema = z
  .enum(['DbNull', 'JsonNull'])
  .transform((value) =>
    value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value,
  );

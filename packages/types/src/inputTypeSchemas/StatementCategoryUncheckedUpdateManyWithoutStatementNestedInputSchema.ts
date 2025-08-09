import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateManyStatementInputEnvelopeSchema } from './StatementCategoryCreateManyStatementInputEnvelopeSchema';
import { StatementCategoryCreateOrConnectWithoutStatementInputSchema } from './StatementCategoryCreateOrConnectWithoutStatementInputSchema';
import { StatementCategoryCreateWithoutStatementInputSchema } from './StatementCategoryCreateWithoutStatementInputSchema';
import { StatementCategoryScalarWhereInputSchema } from './StatementCategoryScalarWhereInputSchema';
import { StatementCategoryUncheckedCreateWithoutStatementInputSchema } from './StatementCategoryUncheckedCreateWithoutStatementInputSchema';
import { StatementCategoryUpdateManyWithWhereWithoutStatementInputSchema } from './StatementCategoryUpdateManyWithWhereWithoutStatementInputSchema';
import { StatementCategoryUpdateWithWhereUniqueWithoutStatementInputSchema } from './StatementCategoryUpdateWithWhereUniqueWithoutStatementInputSchema';
import { StatementCategoryUpsertWithWhereUniqueWithoutStatementInputSchema } from './StatementCategoryUpsertWithWhereUniqueWithoutStatementInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryUncheckedUpdateManyWithoutStatementNestedInputSchema: z.ZodType<Prisma.StatementCategoryUncheckedUpdateManyWithoutStatementNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementCategoryCreateWithoutStatementInputSchema),
          z.lazy(() => StatementCategoryCreateWithoutStatementInputSchema).array(),
          z.lazy(() => StatementCategoryUncheckedCreateWithoutStatementInputSchema),
          z.lazy(() => StatementCategoryUncheckedCreateWithoutStatementInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StatementCategoryCreateOrConnectWithoutStatementInputSchema),
          z.lazy(() => StatementCategoryCreateOrConnectWithoutStatementInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => StatementCategoryUpsertWithWhereUniqueWithoutStatementInputSchema),
          z.lazy(() => StatementCategoryUpsertWithWhereUniqueWithoutStatementInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => StatementCategoryCreateManyStatementInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => StatementCategoryWhereUniqueInputSchema),
          z.lazy(() => StatementCategoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StatementCategoryWhereUniqueInputSchema),
          z.lazy(() => StatementCategoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StatementCategoryWhereUniqueInputSchema),
          z.lazy(() => StatementCategoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StatementCategoryWhereUniqueInputSchema),
          z.lazy(() => StatementCategoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => StatementCategoryUpdateWithWhereUniqueWithoutStatementInputSchema),
          z.lazy(() => StatementCategoryUpdateWithWhereUniqueWithoutStatementInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => StatementCategoryUpdateManyWithWhereWithoutStatementInputSchema),
          z.lazy(() => StatementCategoryUpdateManyWithWhereWithoutStatementInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StatementCategoryScalarWhereInputSchema),
          z.lazy(() => StatementCategoryScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementCategoryUncheckedUpdateManyWithoutStatementNestedInputSchema;

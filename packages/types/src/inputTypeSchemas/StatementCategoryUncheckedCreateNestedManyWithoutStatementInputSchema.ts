import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCategoryCreateManyStatementInputEnvelopeSchema } from './StatementCategoryCreateManyStatementInputEnvelopeSchema';
import { StatementCategoryCreateOrConnectWithoutStatementInputSchema } from './StatementCategoryCreateOrConnectWithoutStatementInputSchema';
import { StatementCategoryCreateWithoutStatementInputSchema } from './StatementCategoryCreateWithoutStatementInputSchema';
import { StatementCategoryUncheckedCreateWithoutStatementInputSchema } from './StatementCategoryUncheckedCreateWithoutStatementInputSchema';
import { StatementCategoryWhereUniqueInputSchema } from './StatementCategoryWhereUniqueInputSchema';

export const StatementCategoryUncheckedCreateNestedManyWithoutStatementInputSchema: z.ZodType<Prisma.StatementCategoryUncheckedCreateNestedManyWithoutStatementInput> =
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
      createMany: z.lazy(() => StatementCategoryCreateManyStatementInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => StatementCategoryWhereUniqueInputSchema),
          z.lazy(() => StatementCategoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementCategoryUncheckedCreateNestedManyWithoutStatementInputSchema;

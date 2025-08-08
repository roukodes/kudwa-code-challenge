import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateManyCompanyInputEnvelopeSchema } from './StatementCreateManyCompanyInputEnvelopeSchema';
import { StatementCreateOrConnectWithoutCompanyInputSchema } from './StatementCreateOrConnectWithoutCompanyInputSchema';
import { StatementCreateWithoutCompanyInputSchema } from './StatementCreateWithoutCompanyInputSchema';
import { StatementUncheckedCreateWithoutCompanyInputSchema } from './StatementUncheckedCreateWithoutCompanyInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.StatementUncheckedCreateNestedManyWithoutCompanyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StatementCreateWithoutCompanyInputSchema),
          z.lazy(() => StatementCreateWithoutCompanyInputSchema).array(),
          z.lazy(() => StatementUncheckedCreateWithoutCompanyInputSchema),
          z.lazy(() => StatementUncheckedCreateWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StatementCreateOrConnectWithoutCompanyInputSchema),
          z.lazy(() => StatementCreateOrConnectWithoutCompanyInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => StatementCreateManyCompanyInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => StatementWhereUniqueInputSchema),
          z.lazy(() => StatementWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default StatementUncheckedCreateNestedManyWithoutCompanyInputSchema;

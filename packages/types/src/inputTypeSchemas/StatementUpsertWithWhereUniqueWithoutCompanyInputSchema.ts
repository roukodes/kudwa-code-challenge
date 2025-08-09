import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { StatementCreateWithoutCompanyInputSchema } from './StatementCreateWithoutCompanyInputSchema';
import { StatementUncheckedCreateWithoutCompanyInputSchema } from './StatementUncheckedCreateWithoutCompanyInputSchema';
import { StatementUncheckedUpdateWithoutCompanyInputSchema } from './StatementUncheckedUpdateWithoutCompanyInputSchema';
import { StatementUpdateWithoutCompanyInputSchema } from './StatementUpdateWithoutCompanyInputSchema';
import { StatementWhereUniqueInputSchema } from './StatementWhereUniqueInputSchema';

export const StatementUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.StatementUpsertWithWhereUniqueWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => StatementWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => StatementUpdateWithoutCompanyInputSchema),
        z.lazy(() => StatementUncheckedUpdateWithoutCompanyInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StatementCreateWithoutCompanyInputSchema),
        z.lazy(() => StatementUncheckedCreateWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default StatementUpsertWithWhereUniqueWithoutCompanyInputSchema;

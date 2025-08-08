import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountScalarWhereInputSchema } from './ReportAccountScalarWhereInputSchema';
import { ReportAccountUncheckedUpdateManyWithoutParentAccountInputSchema } from './ReportAccountUncheckedUpdateManyWithoutParentAccountInputSchema';
import { ReportAccountUpdateManyMutationInputSchema } from './ReportAccountUpdateManyMutationInputSchema';

export const ReportAccountUpdateManyWithWhereWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountUpdateManyWithWhereWithoutParentAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountUpdateManyMutationInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateManyWithoutParentAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateManyWithWhereWithoutParentAccountInputSchema;

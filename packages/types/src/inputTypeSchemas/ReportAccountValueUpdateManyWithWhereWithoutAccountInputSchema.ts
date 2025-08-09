import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountValueScalarWhereInputSchema } from './ReportAccountValueScalarWhereInputSchema';
import { ReportAccountValueUncheckedUpdateManyWithoutAccountInputSchema } from './ReportAccountValueUncheckedUpdateManyWithoutAccountInputSchema';
import { ReportAccountValueUpdateManyMutationInputSchema } from './ReportAccountValueUpdateManyMutationInputSchema';

export const ReportAccountValueUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.ReportAccountValueUpdateManyWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountValueScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ReportAccountValueUpdateManyMutationInputSchema),
        z.lazy(() => ReportAccountValueUncheckedUpdateManyWithoutAccountInputSchema),
      ]),
    })
    .strict();

export default ReportAccountValueUpdateManyWithWhereWithoutAccountInputSchema;

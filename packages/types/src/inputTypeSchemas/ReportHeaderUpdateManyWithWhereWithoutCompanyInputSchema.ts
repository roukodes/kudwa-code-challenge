import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportHeaderScalarWhereInputSchema } from './ReportHeaderScalarWhereInputSchema';
import { ReportHeaderUncheckedUpdateManyWithoutCompanyInputSchema } from './ReportHeaderUncheckedUpdateManyWithoutCompanyInputSchema';
import { ReportHeaderUpdateManyMutationInputSchema } from './ReportHeaderUpdateManyMutationInputSchema';

export const ReportHeaderUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.ReportHeaderUpdateManyWithWhereWithoutCompanyInput> =
  z
    .object({
      where: z.lazy(() => ReportHeaderScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ReportHeaderUpdateManyMutationInputSchema),
        z.lazy(() => ReportHeaderUncheckedUpdateManyWithoutCompanyInputSchema),
      ]),
    })
    .strict();

export default ReportHeaderUpdateManyWithWhereWithoutCompanyInputSchema;

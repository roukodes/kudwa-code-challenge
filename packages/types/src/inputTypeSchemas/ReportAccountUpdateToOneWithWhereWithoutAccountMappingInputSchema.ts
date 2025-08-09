import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema';
import { ReportAccountUpdateWithoutAccountMappingInputSchema } from './ReportAccountUpdateWithoutAccountMappingInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountUpdateToOneWithWhereWithoutAccountMappingInputSchema: z.ZodType<Prisma.ReportAccountUpdateToOneWithWhereWithoutAccountMappingInput> =
  z
    .object({
      where: z.lazy(() => ReportAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ReportAccountUpdateWithoutAccountMappingInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema),
      ]),
    })
    .strict();

export default ReportAccountUpdateToOneWithWhereWithoutAccountMappingInputSchema;

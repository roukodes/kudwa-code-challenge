import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateWithoutAccountMappingInputSchema } from './ReportAccountCreateWithoutAccountMappingInputSchema';
import { ReportAccountUncheckedCreateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedCreateWithoutAccountMappingInputSchema';
import { ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema';
import { ReportAccountUpdateWithoutAccountMappingInputSchema } from './ReportAccountUpdateWithoutAccountMappingInputSchema';
import { ReportAccountWhereInputSchema } from './ReportAccountWhereInputSchema';

export const ReportAccountUpsertWithoutAccountMappingInputSchema: z.ZodType<Prisma.ReportAccountUpsertWithoutAccountMappingInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ReportAccountUpdateWithoutAccountMappingInputSchema),
        z.lazy(() => ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReportAccountCreateWithoutAccountMappingInputSchema),
        z.lazy(() => ReportAccountUncheckedCreateWithoutAccountMappingInputSchema),
      ]),
      where: z.lazy(() => ReportAccountWhereInputSchema).optional(),
    })
    .strict();

export default ReportAccountUpsertWithoutAccountMappingInputSchema;

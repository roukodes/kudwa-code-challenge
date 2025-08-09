import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateOrConnectWithoutAccountMappingInputSchema } from './ReportAccountCreateOrConnectWithoutAccountMappingInputSchema';
import { ReportAccountCreateWithoutAccountMappingInputSchema } from './ReportAccountCreateWithoutAccountMappingInputSchema';
import { ReportAccountUncheckedCreateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedCreateWithoutAccountMappingInputSchema';
import { ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema } from './ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema';
import { ReportAccountUpdateToOneWithWhereWithoutAccountMappingInputSchema } from './ReportAccountUpdateToOneWithWhereWithoutAccountMappingInputSchema';
import { ReportAccountUpdateWithoutAccountMappingInputSchema } from './ReportAccountUpdateWithoutAccountMappingInputSchema';
import { ReportAccountUpsertWithoutAccountMappingInputSchema } from './ReportAccountUpsertWithoutAccountMappingInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema: z.ZodType<Prisma.ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutAccountMappingInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutAccountMappingInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ReportAccountCreateOrConnectWithoutAccountMappingInputSchema)
        .optional(),
      upsert: z.lazy(() => ReportAccountUpsertWithoutAccountMappingInputSchema).optional(),
      connect: z.lazy(() => ReportAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ReportAccountUpdateToOneWithWhereWithoutAccountMappingInputSchema),
          z.lazy(() => ReportAccountUpdateWithoutAccountMappingInputSchema),
          z.lazy(() => ReportAccountUncheckedUpdateWithoutAccountMappingInputSchema),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountUpdateOneRequiredWithoutAccountMappingNestedInputSchema;

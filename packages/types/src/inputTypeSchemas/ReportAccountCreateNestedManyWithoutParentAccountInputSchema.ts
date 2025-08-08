import type { Prisma } from '@prisma/client';
import { z } from 'zod';

import { ReportAccountCreateManyParentAccountInputEnvelopeSchema } from './ReportAccountCreateManyParentAccountInputEnvelopeSchema';
import { ReportAccountCreateOrConnectWithoutParentAccountInputSchema } from './ReportAccountCreateOrConnectWithoutParentAccountInputSchema';
import { ReportAccountCreateWithoutParentAccountInputSchema } from './ReportAccountCreateWithoutParentAccountInputSchema';
import { ReportAccountUncheckedCreateWithoutParentAccountInputSchema } from './ReportAccountUncheckedCreateWithoutParentAccountInputSchema';
import { ReportAccountWhereUniqueInputSchema } from './ReportAccountWhereUniqueInputSchema';

export const ReportAccountCreateNestedManyWithoutParentAccountInputSchema: z.ZodType<Prisma.ReportAccountCreateNestedManyWithoutParentAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReportAccountCreateWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountCreateWithoutParentAccountInputSchema).array(),
          z.lazy(() => ReportAccountUncheckedCreateWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountUncheckedCreateWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReportAccountCreateOrConnectWithoutParentAccountInputSchema),
          z.lazy(() => ReportAccountCreateOrConnectWithoutParentAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => ReportAccountCreateManyParentAccountInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => ReportAccountWhereUniqueInputSchema),
          z.lazy(() => ReportAccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReportAccountCreateNestedManyWithoutParentAccountInputSchema;

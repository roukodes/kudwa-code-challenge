import { Router } from 'express';

import { runETL } from '@/etl';
import { asyncHandler, success } from '@/middleware/response';

const router = Router();

router.post(
  '/run',
  asyncHandler(async (_req, res) => {
    const result = await runETL();
    return success(res, result);
  }),
);

export default router;

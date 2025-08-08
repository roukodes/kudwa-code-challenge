import { Router } from 'express';

import { runETLService } from '@/services/etl.service';

const router = Router();

// Trigger ETL
router.post('/run', async (_req, res, next) => {
  try {
    const result = await runETLService();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default router;

import { Router } from 'express';

import etlRoutes from '@/routes/etl.routes';
import reportRoutes from '@/routes/report.routes';
import statementsRoutes from '@/routes/statements.routes';

const router = Router();

router.use('/etl', etlRoutes);
router.use('/reports', reportRoutes);
router.use('/statements', statementsRoutes);

export default router;

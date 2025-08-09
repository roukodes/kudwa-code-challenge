import { Router } from 'express';

import etlRoutes from '@/routes/etl.routes';
import reportRoutes from '@/routes/report.routes';
import statementRoutes from '@/routes/statement.routes';

const router = Router();

router.use('/etl', etlRoutes);
router.use('/reports', reportRoutes);
router.use('/statements', statementRoutes);

export default router;

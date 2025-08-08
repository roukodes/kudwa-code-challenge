import { Router } from 'express';

import etlRoutes from '@/routes/etl.routes';

const router = Router();

router.use('/etl', etlRoutes);

export default router;

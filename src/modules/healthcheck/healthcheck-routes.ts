import { Router } from 'express';
import { getHealthcheck } from './healthcheck-controller';

const router: Router = Router();

router.get('/_healthcheck', getHealthcheck);

export default router;

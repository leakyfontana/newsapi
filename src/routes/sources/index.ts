import { Router } from 'express';
import { getSourcesController } from '../../controllers/sources';

const router = Router();

router.get('/', getSourcesController);

export default router;

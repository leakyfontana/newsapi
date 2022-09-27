import { Router } from 'express';
import { getTopHeadlinesController } from '../../controllers/headlines';

const router = Router();

router.get('/:country', getTopHeadlinesController);

export default router;

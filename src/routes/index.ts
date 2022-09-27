import { Router } from 'express';
import articlesRouter from './articles';
import headlinesRouter from './headlines';
import sourcesRouter from './sources';

const router = Router();

router.use('/articles', articlesRouter);
router.use('/top-headlines', headlinesRouter);
router.use('/sources', sourcesRouter);

export default router;

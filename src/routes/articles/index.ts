import { Router } from 'express';
import {
  getArticlesByDateController,
  getArticlesByTypeController,
  getArticlesTop10Controller
} from '../../controllers/articles';

const router = Router();

router.get('/search/:query/:from?/:to?', getArticlesByDateController);
router.get('/top10/:query', getArticlesTop10Controller);
router.get('/search-by/:type/:query', getArticlesByTypeController);

export default router;

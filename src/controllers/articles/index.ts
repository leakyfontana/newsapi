import { Request, Response } from 'express';
import {
  getArticlesByDateService,
  getArticlesByTypeService,
  getArticlesTop10Service
} from '../../services/articles';
import { SEARCH_TYPES } from '../../utils/constants';

export const getArticlesByDateController = async (
  req: Request,
  res: Response
) => {
  const { query, from, to } = req.params;
  try {
    const { data } = await getArticlesByDateService(query, from, to);
    res.send(data.articles);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
};

export const getArticlesTop10Controller = async (
  req: Request,
  res: Response
) => {
  const { query } = req.params;
  try {
    const { data } = await getArticlesTop10Service(query);
    res.send(data.articles);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
};

export const getArticlesByTypeController = async (
  req: Request,
  res: Response
) => {
  const { query, type } = req.params;
  if (!SEARCH_TYPES.includes(type)) {
    res.status(400).send({
      msg: 'Invalid search type. Options: title, description or content'
    });
  }
  try {
    const { data } = await getArticlesByTypeService(query, type);
    res.send(data.articles);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
};

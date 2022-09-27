import axios from '../../utils/axios';
import { Article_Response } from '../../utils/types';

export const getArticlesByDateService = async (
  query: string,
  from: string,
  to: string
) => {
  return axios.get<Article_Response>(
    `/everything?q=${query}&from=${from}&to=${to}`,
    {
      headers: {
        'X-API-KEY': `${process.env.NEWS_API_KEY}`
      }
    }
  );
};

export const getArticlesTop10Service = async (query: string) => {
  return axios.get<Article_Response>(
    `/everything?q=${query}&pageSize=10&page=1&sortBy=popularity&language=en`,
    {
      headers: {
        'X-API-KEY': `${process.env.NEWS_API_KEY}`
      }
    }
  );
};

export const getArticlesByTypeService = async (query: string, type: string) => {
  return axios.get<Article_Response>(
    `/everything?q=${query}&searchIn=${type}`,
    {
      headers: {
        'X-API-KEY': `${process.env.NEWS_API_KEY}`
      }
    }
  );
};

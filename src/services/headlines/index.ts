import axios from '../../utils/axios';
import { Article_Response } from '../../utils/types';

export const getTopHeadlinesService = async (country: string) => {
  return axios.get<Article_Response>(`/top-headlines?country=${country}`, {
    headers: {
      'X-API-KEY': `${process.env.NEWS_API_KEY}`
    }
  });
};

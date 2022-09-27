import axios from '../../utils/axios';
import { Source_Response } from '../../utils/types';

export const getSourcesService = async () => {
  return axios.get<Source_Response>(`/top-headlines/sources`, {
    headers: {
      'X-API-KEY': `${process.env.NEWS_API_KEY}`
    }
  });
};

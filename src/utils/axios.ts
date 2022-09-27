import axios from 'axios';
import { NEWS_API_URL } from './constants';

const instance = axios.create({
  baseURL: NEWS_API_URL
});

export default instance;

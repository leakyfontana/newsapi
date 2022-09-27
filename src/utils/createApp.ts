import { config } from 'dotenv';
import express, { Express } from 'express';
import routes from '../routes';
import cors from 'cors';
import apicache from 'apicache';

config();

export const createApp = (): Express => {
  const app = express();
  //Enable parsing middleware from requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //Enable CORS
  app.use(cors({ origin: '*', credentials: true }));
  //Setup api routes with /api as root
  app.use('/api', routes);

  //configure apicache
  const cache = apicache.middleware;

  //caching all routes for 5 minutes
  app.use(cache('5 minutes'));

  return app;
};

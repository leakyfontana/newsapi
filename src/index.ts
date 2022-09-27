import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import { createApp } from './utils/createApp';

config();

const app: Express = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('A Simple Test');
});

const main = async () => {
  try {
    const app: Express = createApp();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
    console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
  } catch (err) {
    console.log(err);
  }
};
main();

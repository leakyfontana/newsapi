import { Request, Response } from 'express';
import { getSourcesService } from '../../services/sources';

export const getSourcesController = async (req: Request, res: Response) => {
  try {
    const { data } = await getSourcesService();
    res.send(data.sources);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
};

import { Request, Response } from 'express';
import { getTopHeadlinesService } from '../../services/headlines';
import { COUNTRIES } from '../../utils/constants';

export const getTopHeadlinesController = async (
  req: Request,
  res: Response
) => {
  const { country } = req.params;
  if (!COUNTRIES.includes(country)) {
    res.status(400).send({ msg: 'Invalid country' });
  }
  try {
    const { data } = await getTopHeadlinesService(country);
    res.send(data.articles);
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: 'Error' });
  }
};

import { Response } from 'express';

export const getHealthcheck = async (_: any, res: Response) =>
  res.json({ status: true, message: "It's alright!" });

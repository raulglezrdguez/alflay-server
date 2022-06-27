import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.headers.authorization);
  res
    .status(200)
    .json({ name: req.headers.authorization || 'sin autorizacion' });
}

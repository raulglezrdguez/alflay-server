import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.headers.authorization);
  const name = req.headers.authorization ? 'Ok' : 'Cancel';
  res.status(200).json({ name });
}

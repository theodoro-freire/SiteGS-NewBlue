import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, senha } = req.body;

  res.status(200).json({ message: 'Login bem-sucedido' });
}

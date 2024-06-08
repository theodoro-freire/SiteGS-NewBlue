import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nome, email, senha } = req.body;
 
  res.status(200).json({ message: 'Registro bem-sucedido' });
}

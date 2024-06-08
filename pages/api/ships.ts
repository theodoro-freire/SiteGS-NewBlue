import { NextApiRequest, NextApiResponse } from 'next';

const navios = [
  { id: 1, nome: 'Navio 1', descricao: 'Descrição do Navio 1' },
  { id: 2, nome: 'Navio 2', descricao: 'Descrição do Navio 2' },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(navios);
}

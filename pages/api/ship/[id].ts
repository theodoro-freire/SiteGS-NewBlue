import { NextApiRequest, NextApiResponse } from 'next';

const navios = [
  { id: 1, nome: 'Navio 1', descricao: 'Descrição do Navio 1' },
  { id: 2, nome: 'Navio 2', descricao: 'Descrição do Navio 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const navio = navios.find((s) => s.id === parseInt(id as string, 10));
  if (navio) {
    res.status(200).json(navio);
  } else {
    res.status(404).json({ message: 'Navio não encontrado' });
  }
}

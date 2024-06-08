import { useEffect, useState } from 'react';

const ShipList = () => {
  const [navios, setNavios] = useState([]);

  useEffect(() => {
    const fetchNavios = async () => {
      const response = await fetch('/api/ships');
      const data = await response.json();
      setNavios(data);
    };

    fetchNavios();
  }, []);

  return (
    <div>
      <h1>Navios</h1>
      <ul>
        {navios.map((navio) => (
          <li key={navio.id}>
            <a href={`/ship/${navio.id}`}>{navio.nome}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
